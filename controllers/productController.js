const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const result = await Product.fetchAll();
    const products = result[0];
    console.log(products);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, amount } = req.body;
    console.log(name, amount);
    const product = new Product(null, name, amount);
    await product.save();

    res.status(200).json({ message: "item successfully created!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name: updatedName, amount: updatedAmount } = req.body;

    console.log(updatedName, updatedAmount);

    await Product.updateById(id, updatedName, updatedAmount);

    res.status(200).json({ message: "item successfully updated!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Product.deleteById(id);
    res.status(200).json({ message: "item successfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
