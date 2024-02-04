import http from "node:http";
import { useBody } from "./middlewares/use-body.js";
import { routes } from "./routes.js";

const server = http.createServer(async (req, res) => {
  await useBody(req);

  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });

  if (route) route.callback(req, res);

  console.log(req.body);
});

server.listen(3333, () => {
  console.log("Server is running on port 3333");
});
