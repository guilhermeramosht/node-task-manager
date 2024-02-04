export const buildRoute = (path) => {
  const regex = /:([a-zA-Z\-]+)/g;
  const pathRegex = path.replaceAll(regex, "(?<$1>[a-zA-Z0-9-]+)");
  return new RegExp(`^${pathRegex}`);
};
