"use strict";

const base64 = require("base-64");

module.exports = (users) => async (req, res, next) => {
  if (!req.headers.authorization) {
    next("Invalid login");
    return;
  }
  // basic ajkldsfhlkdsjfds
  const encodedCredintials = req.headers.authorization.split(" ").pop();
  //username:password
  const [username, password] = base64.decode(encodedCredintials).split(":");

  try {
    let user = await users.authenticateBasic(username, password);
    req.user = user;
    next();
  } catch (error) {
    next("Invalid login");
  }
};
