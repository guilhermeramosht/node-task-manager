import { Database } from "./database/database.js";

const database = new Database();

/**
 * Task body:
 * - id: string
 * - title: string
 * - description: string
 * - completed_at: Date
 * - created_at: Date
 * - updated_at: Date
 */

export const routes = [
  {
    path: "/tasks",
    method: "GET",
    callback: (_req, res) => {
      const tasks = database.list("tasks");
      return res.end(JSON.stringify(tasks));
    },
  },
  {
    path: "/tasks",
    method: "POST",
    callback: (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.end(400, "Title and description are required");
      }

      const task = database.create("tasks", {
        title,
        description,
        completed_at: null,
      });

      return res.end(JSON.stringify(task));
    },
  },
  {
    path: "/tasks/:id",
    method: "PUT",
    callback: (req, res) => {},
  },
  {
    path: "/tasks/:id",
    method: "DELETE",
    callback: (req, res) => {},
  },
  {
    path: "/tasks/:id/complete",
    method: "PATCH",
    callback: (req, res) => {},
  },
  {
    path: "/tasks/bulk-import",
    method: "POST",
    callback: (req, res) => {},
  },
];
