# Node Task Manager

## About the project

A Node.js API for task management, built entirely with Node.js (without any additional packages or frameworks except for csv-parse). Featuring CRUD operations, CSV bulk import, and error handling.

## How to run

Run `npm i` to install `csv-parser` and `npm run dev`.

To test the bulk feature, the `tasks.csv` file is already created, but it's possible to delete and generate another one (bigger or smaller) by updating the variable `NUMBER_OF_TASKS`. Once the `tasks.csv` file is created, run execute `write-tasks-on-database.js` to upload it to the database. `write-tasks-on-database.js` contains two differents approaches, one adding the tasks through the API and another one adding the tasks straight to the database.
