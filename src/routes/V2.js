"use strict";
const express = require("express");
const router = express.Router();
const { Users, Food, Clothes } = require("../models/index");
const bearerAuth = require("../middleware/bearer-auth");
const acl = require("../middleware/acl");

router.get("/api/v2/food", bearerAuth(Users), acl("read"), async (req, res) => {
  let food = await Food.getAll();
  res.status(200).json(food);
});

router.get(
  "/api/v2/food/:id",
  bearerAuth(Users),
  acl("read"),
  async (req, res) => {
    let id = parseInt(req.params.id);
    let food = await Food.get(id);
    res.status(200).json(food);
  }
);

router.post(
  "/api/v2/food",
  bearerAuth(Users),
  acl("create"),
  async (req, res) => {
    let food = await Food.create(req.body);
    res.status(201).json(food);
  }
);

router.put(
  "/api/v2/food/:id",
  bearerAuth(Users),
  acl("update"),
  async (req, res) => {
    let id = parseInt(req.params.id);
    let food = await Food.update(id, req.body);
    res.status(201).json(food);
  }
);
router.delete(
  "/api/v2/food/:id",
  bearerAuth(Users),
  acl("delete"),
  async (req, res) => {
    let id = parseInt(req.params.id);
    let food = await Food.delete(id);
    res.status(200).json(food);
  }
);

// clothes clothes clothes clothes clothes clothes clothes clothes clothes clothes clothes clothes

router.get(
  "/api/v2/clothes",
  bearerAuth(Users),
  acl("read"),
  async (req, res) => {
    let clothes = await Clothes.getAll();
    res.status(200).json(clothes);
  }
);

router.get(
  "/api/v2/clothes/:id",
  bearerAuth(Users),
  acl("read"),
  async (req, res) => {
    let id = parseInt(req.params.id);
    let clothes = await Clothes.get(id);
    res.status(200).json(clothes);
  }
);

router.post(
  "/api/v2/clothes",
  bearerAuth(Users),
  acl("create"),
  async (req, res) => {
    let clothes = await Clothes.create(req.body);
    res.status(201).json(clothes);
  }
);

router.put(
  "/api/v2/clothes/:id",
  bearerAuth(Users),
  acl("update"),
  async (req, res) => {
    let id = parseInt(req.params.id);
    let clothes = await Clothes.update(id, req.body);
    res.status(201).json(clothes);
  }
);
router.delete(
  "/api/v2/clothes/:id",
  bearerAuth(Users),
  acl("delete"),
  async (req, res) => {
    let id = parseInt(req.params.id);
    let clothes = await Clothes.delete(id);
    res.status(200).json(clothes);
  }
);
module.exports = router;
