const express = require("express");
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

const router = express.Router();

// Create - POST
router.post("/users", createNewUser);

// GET all data
router.get("/users", getAllUsers);

// PATCH - UPDATE DATA
router.patch("/users/:idUser", updateUser);

// DELETE -
router.delete("/users/:idUser", deleteUser);

module.exports = router;
