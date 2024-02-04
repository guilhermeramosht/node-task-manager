import fs from "node:fs";
import { parse } from "csv-parse";
import { Database } from "../database/database.js";
const fileStream = fs.createReadStream("tasks.csv");
const parser = parse({ columns: true });
const MAX_CONCURRENT_REQUESTS = 10;
let activeRequests = 0;

let database = new Database();

/**
 * Solution according to the challenge requirements
 */
const sendRowToApi = async (row) => {
  try {
    activeRequests++;
    await fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
    });
  } catch (err) {
    console.error(err.message);
  } finally {
    activeRequests--;
  }
};
parser.on("readable", async () => {
  let row;
  while (
    activeRequests < MAX_CONCURRENT_REQUESTS &&
    null !== (row = parser.read())
  ) {
    await sendRowToApi(row);
  }
});

/**
 * My solution: I preferred to add straight to the database to avoid overloading the API
 */
// let chunk = [];
// let CHUNK_SIZE = 10;
// parser.on("readable", () => {
//   let row;
//   while (null !== (row = parser.read())) {
//     if (!row.title || !row.description) continue;

//     chunk.push(row);

//     if (chunk.length === CHUNK_SIZE) {
//       database.createMany("tasks", chunk);
//       chunk = [];
//     }
//   }
// });

fileStream.pipe(parser);
