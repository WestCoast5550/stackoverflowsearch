import app from "./app";

export default axios => ({
  app: app(axios)
});
