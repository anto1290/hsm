const config = require("../config/dev");
const session = require("express-session");
const passport = require("passport");
// format max Age days * hours * minutes * seconds
exports.init = (app, db) => {
  const sess = {
    name: "hotelSession",
    secret: config.SESSION_SECRET,
    cookie: { maxAge: 90 * 24 * 60 * 60 * 1000, secure: false },
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore(),
  };
  require("./passport").passinit(passport);
  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
};
