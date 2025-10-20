const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
app.use(express.json());

const sequelize = new Sequelize("appdb", "postgres", "postgres", {
  host: "db",
  dialect: "postgres",
});

const Item = sequelize.define("Item", {
  name: { type: DataTypes.STRING, allowNull: false },
});

app.get("/items", async (_, res) => res.json(await Item.findAll()));
app.post("/items", async (req, res) => res.json(await Item.create(req.body)));

app.listen(3001, () => console.log("Backend rodando na porta 3001"));

