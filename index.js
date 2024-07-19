const express = require("express");
const { router } = require("./routers/user.router");
const database = require("./config/database");
const cookies = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const { localAuth } = require("./middleware/user.Auth");
const { P_router } = require("./routers/product.router");
const cat_router = require("./routers/category.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(cookies());

app.use(flash());

localAuth(passport);

app.use(session({ secret: "private-key", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(router);
app.use("/product", P_router);
app.use("/category", cat_router);


app.listen(9091, (err) => {
  database();
  if (!err) {
    console.log("server start: http://localhost:9091");
  }
});
