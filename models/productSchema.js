const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: String,
  productname: String,
  productprice: Number,
  description: String,
  CategoryId:{
    type:  mongoose.Schema.Types.ObjectId,
    ref:'categoryTbl'
  }
  
});

const ProductDB = mongoose.model("ProductTbl", ProductSchema);

module.exports = ProductDB;
