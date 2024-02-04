export const notFoundException = (res, message) => {
  res.writeHead(404);
  return res.end(JSON.stringify({ message }));
};
