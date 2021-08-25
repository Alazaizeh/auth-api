"use strict";

// id column will be added by default with datatibe SERIAL
const Food = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Food;
