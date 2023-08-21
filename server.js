const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 300000 }, // 5 minutes
};

app.use(session(sess));

// Create Handlesbars.js engine
const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Connect to sequelize and then listen
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
