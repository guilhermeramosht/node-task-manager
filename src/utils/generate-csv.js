import fs from "fs";

/**
 * Generates a CSV file for testing purposes.
 */
const NUMBER_OF_TASKS = 10000;
const generateCSV = () => {
  const filePath = "tasks.csv";
  const header = "title,description\n";
  let csvData = header;

  for (let i = 1; i <= NUMBER_OF_TASKS; i++) {
    const title = `Task ${i.toString().padStart(2, "0")}`;
    const description = `Description of Task ${i.toString().padStart(2, "0")}`;
    csvData += `${title},${description}\n`;
  }

  fs.writeFile(filePath, csvData, (err) => {
    if (err) {
      console.error("Error writing CSV file:", err);
    } else {
      console.log("CSV file generated successfully:", filePath);
    }
  });
};

generateCSV();
