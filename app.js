const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mainRouter = require("./routes/mainRoutes");

// parsing middleware. it is use to parse data from form the request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ROUTES
app.use("/admin", mainRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log(`app.js server is running! ${process.env.PORT}`);
});
