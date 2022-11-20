require("dotenv").config();
const express = require("express");
const logRequest = require("./middleware/logs");
const userRoutes = require("./routes/user");
const app = express();

app.use(express.json());

app.use(logRequest);

app.use(userRoutes);

app.use("/", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("Server berhasil di running di port", process.env.PORT);
});
