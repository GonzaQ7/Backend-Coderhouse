const express = require("express");
const hbs = require("express-handlebars");
const { json, urlencoded } = express;
const productos = require("./modules/productos");

const app = express();
const PORT = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "layout.hbs",
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/productos", productos);

const server = app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
