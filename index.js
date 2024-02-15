const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  const str = "heelo " + process.env.HELLO;
  res.send(str);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
