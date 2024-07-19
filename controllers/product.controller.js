const categoryModel = require("../models/categorySchema");

const ProductDB = require("../models/productSchema");


const productPage = async (req, res) => {
  try {
    let cat = await categoryModel.find();
    
    return res.render("Product", {
      cat,
      
    });
  } catch (error) {
    console.log(error);
  }
};
const addProduct = async (req, res) => {
  try {
    await ProductDB.create(req.body);
    req.flash("flashMsg", "ProductAdded");
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await ProductDB.findByIdAndDelete(id);
    console.log(data);
    req.flash("flashMsg", "deleteProduct");
    // res.send('data deleted..')
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
let ProductId;

const editProduct = async (req, res) => {
  const { id } = req.params;
  ProductId = id;
  try {
    const data = await ProductDB.findById(id);
    return res.render("editProduct", { data });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    // let { id } = req.params;
    console.log(ProductId);
    console.log(req.body);
    let data = await ProductDB.findByIdAndUpdate(ProductId, req.body);

    req.flash("flashMsg", "UpadteProduct");
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const getData = async (req, res) => {
  let data = await ProductDB.find({});
  res.send(data);
};
module.exports = {
  productPage,
  addProduct,
  getData,
  deleteProduct,
  updateProduct,
  editProduct,
};
