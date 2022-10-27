const express = require("express");
const productos = require("./modules/productos");
const app = express();

app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home.pug");
});

app.use("/productos", productos);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
