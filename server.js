const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const port = "3000" || process.env.port;

const corsOption = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOption));
app.use(bodyparser.json());
//Para pasar info por la url
app.use(bodyparser.urlencoded({ extended: true }));

const db = require("./models/index");

db.sequelizeInstanceDB.sync();

const controller = require("./controllers/subject.controller");

app.get("/api/subject", (req, res) => {
  controller.findAll(req, res);
});

app.get("/api/subject/:id", (req, res) => {
  controller.findOne(req, res);
});

app.post("/api/subject/", (req, res) => {
  controller.create(req, res);
});

app.put("/api/subject/:id", (req, res) => {
  controller.update(req, res);
});

app.delete("/api/subject/:id", (req, res) => {
  controller.delete(req, res);
});

/* require("./router/subject.router")(app); */

app.listen(port, () => {
  console.log("Puerto ", port);
});
