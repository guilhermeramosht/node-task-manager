import { Database } from "./database/database.js";
import { buildRoute } from "./utils/build-route.js";

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
    path: buildRoute("/tasks"),
    method: "GET",
    callback: (_req, res) => {
      const tasks = database.list("tasks");
      return res.end(JSON.stringify(tasks));
    },
  },
  {
    path: buildRoute("/tasks"),
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
    path: buildRoute("/tasks/:id"),
    method: "PUT",
    callback: (req, res) => {
      const { title, description } = req.body;
      if (!title && !description)
        return res.end(JSON.stringify({ message: "Nothing to update" }));
      const task = database.update("tasks", req.params.id, req.body);
      return res.end(JSON.stringify(task));
    },
  },
  {
    path: buildRoute("/tasks/:id"),
    method: "DELETE",
    callback: (req, res) => {
      const { id } = req.params;
      if (!id) return res.end(JSON.stringify({ message: "Nothing to delete" }));

      const result = database.delete("tasks", id);

      if (result) {
        return res.end(JSON.stringify({ message: "Task deleted" }));
      } else {
        return res.end(JSON.stringify({ message: "Task not found" }));
      }
    },
  },
  {
    path: buildRoute("/tasks/:id/complete"),
    method: "PATCH",
    callback: (req, res) => {},
  },
  {
    path: buildRoute("/tasks/bulk-import"),
    method: "POST",
    callback: (req, res) => {},
  },
];
