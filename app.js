const express = require("express");
const app = express();

app.get("/execute", (req, res) => {
  const userInput = req.query.code;
  const result = eval(userInput);
  res.send(`Result: ${result}`);
});

app.listen(3000);