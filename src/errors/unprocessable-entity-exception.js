export const unprocessableEntityException = (res, message) => {
  res.writeHead(400);
  return res.end(JSON.stringify({ message }));
};
