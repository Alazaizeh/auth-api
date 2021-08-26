"use strict";

module.exports = (users) => async (req, res, next) => {
  console.log(req);
  if (!req.headers.authorization) {
    console.error(`No authorization header found - jwt`);
    next("Invalid login");
    return;
  }

  // Basic lkahsdfklhsdf
  // Bearer lksahdflkjhdsaflkhasdlkfhj

  let token = req.headers.authorization.split(" ").pop();

  try {
    let user = await users.authenticateBearer(token);
    req.user = user;
    next();
  } catch (error) {
    next("Invalid login");
  }
};
