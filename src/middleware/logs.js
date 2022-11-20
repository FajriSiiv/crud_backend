const logRequest = (req, res, next) => {
  console.log("Log terjadi request api ini ke PATH : ", req.path);
  next();
};

module.exports = logRequest;
