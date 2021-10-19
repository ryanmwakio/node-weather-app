const path = require("path");

const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 8000;

//setting the paths
const publicDirectoryPath = path.join(__dirname, "public");
const templatesPath = path.join(__dirname, "templates");
const partialsPath = path.join(__dirname, "templates", "partials");

//Handlebars
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

//Routing
app.get("/", (req, res) => {
  res.render("views/index", { title: "Weather App" });
});

app.get("/about", (req, res) => {
  res.render("views/about", { title: "about" });
});

app.get("/help", (req, res) => {
  res.render("views/help", { title: "help" });
});

app.get("/weather", (req, res) => {
  res.render("weather", { title: "weather" });
});

app.get("*", (req, res) => {
  res.render("views/error", { title: "error" });
});

app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
});
