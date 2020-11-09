const db = require("../models/index");
const Subject = db.Subject;
//Mirar para que es
const Op = db.Sequelize.Op;
const errorHandler = require("../helpers/function");
//Guarda una materia
exports.create = (req, res) => {
  // Llego una peticion
  if (!req.body.title || !req.body.career) {
    res.status(400).send({
      message: "Title cannot be empty",
    });
    return;
  }

  const subject = {
    title: req.body.title,
    description: req.body.description,
    career: req.body.career,
  };

  //Se intenta crear una materia
  Subject.create(subject)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      errorHandler(res, "Error create", 500);
    });
};

//Busca las materias
exports.findAll = (req, res) => {
  const title = req.params.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Subject.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandler(res, "Error find all", 500);
    });
  console.log("req.headers");
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Subject.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandler(res, "Error find one", 500);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Subject.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Subject was updated successfully",
        });
      } else {
        res.status(404).send({
          mensage: "Cannot update Subject with ID " + id,
        });
      }
    })
    .catch((err) => {
      errorHandler(res, "Error update", 500);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Subject.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Subject was delete successfully",
        });
      } else {
        res.status(404).send({
          mensage: "Cannot delete Subject with ID " + id,
        });
      }
    })
    .catch((err) => {
      errorHandler(res, "Error update", 500);
    });
};
