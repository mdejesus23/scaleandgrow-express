const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Routes
// router.route("/").get(productController.getHomePage);

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.addProduct);

router.route("/products/:id").put(productController.editProduct);
router.route("/products/:id").delete(productController.deleteProduct);

module.exports = router;
