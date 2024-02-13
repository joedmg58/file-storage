//File Model

const { DataTypes } = require("sequelize");
const db = require("../db");

const File = db.define(
  "File",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
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
        type: DataTypes.UUIDV4, //parent directory, if equals null menas that is root directory
        allowNull: true
    },
  },
  {
    tableName: "files",
  }
);

module.exports = File;