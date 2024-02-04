/**
 * Task body:
 * - id: string
 * - title: string
 * - description: string
 * - completed_at: Date
 * - updated_at: Date
 */

export const routes = [
  {
    path: "/tasks",
    method: "GET",
    callback: (req, res) => {
      return res.end();
    },
  },
  {
    path: "/tasks",
    method: "POST",
    callback: (req, res) => {},
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
