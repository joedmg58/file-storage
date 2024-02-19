//File Model

const { DataTypes } = require("sequelize");
const db = require("../db");

const File = db.define(
  "File",
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,  // 0 = file, 1 = dir
      allowNull: false
    },
    parentDir: {
        type: DataTypes.STRING, //parent directory, if equals null means that is root directory
        allowNull: true
    },
  },
  {
    tableName: "files",
  }
);

module.exports = File;