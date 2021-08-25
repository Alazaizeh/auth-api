"use strict";
const express = require("express");
const router = express.Router();
const { Food, Clothes } = require("../models/index");

router.get("/api/v1/food", async (req, res) => {
  let food = await Food.getAll();
  res.status(200).json(food);
});

router.get("/api/v1/food/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let food = await Food.get(id);
  res.status(200).json(food);
});

router.post("/api/v1/food", async (req, res) => {
  let food = await Food.create(req.body);
  res.status(201).json(food);
});

router.put("/api/v1/food/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let food = await Food.update(id, req.body);
  res.status(201).json(food);
});
router.delete("/api/v1/food/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let food = await Food.delete(id);
  res.status(200).json(food);
});

// clothes clothes clothes clothes clothes clothes clothes clothes clothes clothes clothes clothes

router.get("/api/v1/clothes", async (req, res) => {
  let clothes = await Clothes.getAll();
  res.status(200).json(clothes);
});

router.get("/api/v1/clothes/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let clothes = await Clothes.get(id);
  res.status(200).json(clothes);
});
router.post("/api/v1/clothes", async (req, res) => {
  let clothes = await Clothes.create(req.body);
  res.status(201).json(clothes);
});

router.put("/api/v1/clothes/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let clothes = await Clothes.update(id, req.body);
  res.status(201).json(clothes);
});
router.delete("/api/v1/clothes/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let clothes = await Clothes.delete(id);
  res.status(200).json(clothes);
});
module.exports = router;
