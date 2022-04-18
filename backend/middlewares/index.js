const config = require("../config/dev");
const session = require("express-session");
const passport = require("passport");
exports.init = (app, db) => {
  const sess = {
    name: "hotelSession",
    secret: config.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000, secure: false },
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore(),
  };
  require("./passport").passinit(passport);
  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
};
