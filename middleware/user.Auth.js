const userDB = require("../models/userSchema");

const localStartegy = require("passport-local").Strategy;

const userAuth = (req, res, next) => {
  console.log(req.body);
  let { username, email, password, phone } = req.body;
  if (username && email && password && phone) {
    next();
  } else {
    console.log("invalid Data");
  }
};

const localAuth = (passport) => {
  passport.use(
    new localStartegy(async (username, password, done) => {
      console.log(username, password);
      try {
        let User = await userDB.findOne({ username: username });
        console.log("local auth", User);
        if (!User) return done(null, false);
        if (User.password != password) return done(null, false);
        return done(null, User);
      } catch (error) {
        console.log(error);
      }
    })
  );
  passport.serializeUser((User, done) => {
    return done(null, User.id);
  });
  passport.deserializeUser(async (id, done) => {
    const User = await userDB.findById(id);

    return done(null, User);
  });
};

const isAuth = (req, res, next) => {
  // let { user } = req.cookies;
  if (req.user) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

module.exports = { userAuth, isAuth, localAuth };
