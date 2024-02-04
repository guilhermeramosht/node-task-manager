import http from "node:http";
import { useBody } from "./middlewares/use-body.js";
import { routes } from "../src/routes.js";

const server = http.createServer(async (req, res) => {
  await useBody(req);

  const route = routes.find((route) => {
    return route.method === req.method && route.path.test(req.url);
  });

  if (route) {
    const match = req.url.match(route.path);
    req.params = { ...match.groups };
    return route.callback(req, res);
  }
});

server.listen(3333, () => {
  console.log("Server is running on port 3333");
});
