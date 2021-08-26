"use strict";
const express = require("express");

const router = express.Router();

const basicAuth = require("../middleware/basic-auth");
const bearerAuth = require("../middleware/bearer-auth");
const { Users } = require("../models/index");
const acl = require("../middleware/acl");
// {"username":"test", "password":"test"}
router.post("/signup", async (req, res) => {
  // check if user name exists
  console.log(req.body);
  const user = await Users.findOne({ where: { username: req.body.username } });
  if (!user) {
    Users.create(req.body)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(400).send(err));
  } else {
    res.status(401).json("Error user already exists ");
  }
});

router.post("/signin", basicAuth(Users), (req, res) => {
  // the user will have the user info and the token
  res.status(200).send(req.user);
});

router.get("/secret", bearerAuth(Users), (req, res) => {
  res.status(200).send(req.user);
});

router.get("/user", bearerAuth(Users), acl("read"), (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;
