//dry principle -> para generalizar funcion
exports.errorHandler = (res, message, status) => {
  res.status(status).send({
    message: message,
  });
};
