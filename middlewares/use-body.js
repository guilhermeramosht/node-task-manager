export const useBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (chunks.length) {
    req.body = JSON.parse(Buffer.concat(chunks).toString());
  } else {
    req.body = {};
  }
};
