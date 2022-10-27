const express = require("express");
const productos = require("./modules/productos");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.use("/productos", productos);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
