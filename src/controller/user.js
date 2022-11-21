const userModel = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers();

    res.status(200).json({
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

const createNewUser = async (req, res) => {
  const bodyPayload = req.body;

  if (!bodyPayload.email || !bodyPayload.nama || !bodyPayload.address) {
    return res.status(400).json({
      message: "Isi semua form",
      data: null,
    });
  }

  try {
    await userModel.createNewUser(bodyPayload);
    res.status(201).json({
      message: "Create new success",
      data: bodyPayload,
    });
  } catch (err) {
    res.status(500).json({
      message: "Create user failed",
      serverMessage: err,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const bodyPayload = req.body;

  try {
    await userModel.updateUser(bodyPayload, idUser);

    res.json({
      message: "UPDATE user success",
      data: {
        id: idUser,
        ...bodyPayload,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "update user failed",
      serverMessage: err,
    });
  }
};

// 1:39:00

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await userModel.deleteUser(idUser);

    res.status(200).json({
      message: "DELETE user success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "DELETE user failed",
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
