const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor está rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em https://github.com/caletec/ctcnews.git:3000:${port}`);
});
