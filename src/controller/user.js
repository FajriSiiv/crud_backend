const userModel = require("../models/user");

const getAllUsers = async (req, res) => {
  // const [rows,fields] = await userModel.getAllUsers();

  // 1:16:00
  try {
    const [data] = await userModel.getAllUsers();

    res.json({
      message: "Get user access",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Create new success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log("idUser :", idUser);

  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;

  res.json({
    message: "DELETE user success",
    data: {
      id: idUser,
      name: "Muhammad Fajri",
      email: "mhd@gmail.com",
      address: "ajsdjbxcv",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
