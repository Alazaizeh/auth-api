"use strict";

const express = require("express");
const app = express();

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const loggerMeddleware = require("./middleware/logger");

const usersRoutes = require("./routes/users");
const v1 = require("./routes/V1");
const v2 = require("./routes/V2");

app.use(express.json());
app.use(loggerMeddleware);
app.use(usersRoutes);

app.get("/bad", (req, res, next) => {
  next("error from bad end point");
});
app.use(v1);
app.use(v2);

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Server is up on port ${port}`));
  },
};
