const express = require("express");
const app = express();
require("dotenv").config();
// parsing middleware. it is use to parse data from form the request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRouter = require("./routes/mainRoutes");

// ROUTES
app.use("/admin", mainRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log(`app.js server is running!`);
});
