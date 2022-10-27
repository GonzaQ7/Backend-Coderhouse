const express = require("express");
const { Router } = express;
const productos = require("./getProductos");

const router = new Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  let productExists = true;
  if (productos.productos.length === 0) {
    productExists = false;
  }
  res.render("productos.hbs", { products: productos.getAll(), productExists });
});

router.get("/:id", (req, res) => {
  res.json(productos.filtrar(req.params.id));
});

router.post("/", (req, res) => {
  const product = req.body;
  productos.save(product);
  res.status(308).redirect("/");
});

router.put("/:id", (req, res) => {
  res.json(productos.actualizar(req.body, req.params.id));
});

router.delete("/:id", (req, res) => {
  res.json(productos.borrar(req.params.id));
});

module.exports = router;
