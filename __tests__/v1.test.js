"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");

describe("express server", () => {
  it("should GET to /api/v1/food response with 200 OK if not authorized", async () => {
    // arrange
    let param = "/api/v1/food";
    let status = 200;
    // act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  it("should POST to /api/v1/food response with 201 if not authorized", async () => {
    // arrange
    let param = "/api/v1/food";
    let status = 201;
    // user token

    // act
    const response = await request
      .post(param)

      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });

  it("should PUT to /api/v1/food response with 201 if not authorized", async () => {
    // arrange
    let param = "/api/v1/food/5";
    let status = 201;
    // user token

    // act
    const response = await request
      .put(param)

      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });

  // cloooooooothes

  it("should GET to /api/v1/clothes response with 200 OK if not authorized", async () => {
    // arrange
    let param = "/api/v1/clothes";
    let status = 200;
    // act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  it("should POST to /api/v1/clothes response with 201 if not authorized", async () => {
    // arrange
    let param = "/api/v1/clothes";
    let status = 201;
    // user token

    // act
    const response = await request
      .post(param)
      .send({ name: "Shirt", price: 20, color: "red" });
    // assert
    expect(response.status).toBe(status);
  });

  it("should PUT to /api/v1/clothes response with 201 if not authorized", async () => {
    // arrange
    let param = "/api/v1/clothes/3";
    let status = 201;
    // user token

    // act
    const response = await request
      .put(param)
      .send({ name: "Shirt", price: 20, color: "red" });
    // assert
    expect(response.status).toBe(status);
  });
});
