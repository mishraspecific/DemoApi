const express = require("express");
const users = require("./data/users.json");

// Set up the express app
const app = express();


app.get("/api/getUsers", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Users list",
    users: users
  });
});
const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});