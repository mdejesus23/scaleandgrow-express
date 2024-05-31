const db = require("../util/database");

module.exports = class Product {
  constructor(id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }

  save() {
    return db.execute("INSERT INTO products (name, amount) VALUES (?, ?)", [
      this.name,
      this.amount,
    ]);
  }

  static deleteById(id) {
    return db.execute("DELETE FROM products WHERE id = ?", [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }

  static async updateById(id, name, amount) {
    return db.execute("UPDATE products SET name = ?, amount = ? WHERE id = ?", [
      name,
      amount,
      id,
    ]);
  }
};
