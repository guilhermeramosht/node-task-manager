import fs from "node:fs";
import { randomUUID } from "node:crypto";

const databasePath = new URL("database.json", import.meta.url);

export class Database {
  #database = {};

  #persist() {
    fs.writeFileSync(databasePath, JSON.stringify(this.#database));
  }

  constructor() {
    if (fs.existsSync(databasePath))
      this.#database = JSON.parse(fs.readFileSync(databasePath));
    this.#persist();
  }

  list(tableName) {
    return this.#database[tableName] ?? [];
  }

  create(tableName, data) {
    const table = this.#database[tableName];
    const item = {
      id: data.id || randomUUID(),
      created_at: new Date(),
      updated_at: new Date(),
      ...data,
    };

    if (Array.isArray(table)) {
      table.push(item);
    } else {
      this.#database[tableName] = [item];
    }

    this.#persist();

    return item;
  }
}
