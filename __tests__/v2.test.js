"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");

describe("express server", () => {
  it("should GET to /api/v2/food response with 200 OK if authorized", async () => {
    // arrange
    let param = "/api/v2/food";
    let status = 200;
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .get(param)
      .set("Authorization", `Bearer ${token}`);
    // assert
    expect(response.status).toBe(status);
  });
  it("should GET to /api/v2/food response with 500 OK if not authorized", async () => {
    // arrange
    let param = "/api/v2/food";
    let status = 500;
    // act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  it("should POST to /api/v2/food response with 201 OK if authorized", async () => {
    // arrange
    let param = "/api/v2/food";
    let status = 201;
    // admin token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXSwiaWF0IjoxNjI5OTQ0NjcxfQ.tJa4ZKERbmfCBk3kPVbvUfRYL5SAoSAeC8bkIJbKknM"; // act
    const response = await request
      .post(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });
  it("should POST to /api/v2/food response with 500 if not authorized", async () => {
    // arrange
    let param = "/api/v2/food";
    let status = 500;
    // user token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .post(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });

  it("should DELETE to /api/v2/food/5 response with 500 if not authorized", async () => {
    // arrange
    let param = "/api/v2/food/5";
    let status = 500;
    // user token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .delete(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });

  it("should PUT to /api/v2/food response with 201 OK if authorized", async () => {
    // arrange
    let param = "/api/v2/food/5";
    let status = 201;
    // admin token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXSwiaWF0IjoxNjI5OTQ0NjcxfQ.tJa4ZKERbmfCBk3kPVbvUfRYL5SAoSAeC8bkIJbKknM"; // act
    const response = await request
      .put(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });
  it("should PUT to /api/v2/food response with 500 if not authorized", async () => {
    // arrange
    let param = "/api/v2/food/5";
    let status = 500;
    // user token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .put(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Orange" });
    // assert
    expect(response.status).toBe(status);
  });

  // cloooooooothes

  it("should GET to /api/v2/clothes response with 200 OK if authorized", async () => {
    // arrange
    let param = "/api/v2/clothes";
    let status = 200;
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .get(param)
      .set("Authorization", `Bearer ${token}`);
    // assert
    expect(response.status).toBe(status);
  });
  it("should GET to /api/v2/clothes response with 500 OK if not authorized", async () => {
    // arrange
    let param = "/api/v2/clothes";
    let status = 500;
    // act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  it("should POST to /api/v2/clothes response with 201 OK if authorized", async () => {
    // arrange
    let param = "/api/v2/clothes";
    let status = 201;
    // admin token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXSwiaWF0IjoxNjI5OTQ0NjcxfQ.tJa4ZKERbmfCBk3kPVbvUfRYL5SAoSAeC8bkIJbKknM"; // act
    const response = await request
      .post(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Shirt", price: 20, color: "red" });
    // assert
    expect(response.status).toBe(status);
  });
  it("should POST to /api/v2/clothes response with 500 if not authorized", async () => {
    // arrange
    let param = "/api/v2/clothes";
    let status = 500;
    // user token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .post(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Shirt", price: 20, color: "red" });
    // assert
    expect(response.status).toBe(status);
  });

  it("should DELETE to /api/v2/clothes/5 response with 500 if not authorized", async () => {
    // arrange
    let param = "/api/v2/clothes/3";
    let status = 500;
    // user token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .delete(param)
      .set("Authorization", `Bearer ${token}`);
    // assert
    expect(response.status).toBe(status);
  });

  it("should PUT to /api/v2/clothes response with 201 OK if authorized", async () => {
    // arrange
    let param = "/api/v2/clothes/3";
    let status = 201;
    // admin token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXSwiaWF0IjoxNjI5OTQ0NjcxfQ.tJa4ZKERbmfCBk3kPVbvUfRYL5SAoSAeC8bkIJbKknM"; // act
    const response = await request
      .put(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Shirt", price: 20, color: "red" });
    // assert
    expect(response.status).toBe(status);
  });
  it("should PUT to /api/v2/clothes response with 500 if not authorized", async () => {
    // arrange
    let param = "/api/v2/clothes/3";
    let status = 500;
    // user token
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCJdLCJpYXQiOjE2Mjk5MDA0MjB9.9fZ5MBlWLy91Up_XL-AobGCutg4k-2gy17axyrnCP2o";
    // act
    const response = await request
      .put(param)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Shirt", price: 20, color: "red" });
    // assert
    expect(response.status).toBe(status);
  });
});
