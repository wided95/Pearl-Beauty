const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
require("dotenv").config();
const connectDB = require("./config/dbConnect");

// connect to db
connectDB();

// routes
app.use(express.json());
app.use(cors());
app.use("/upload", require("./routes/uploadRouter"));
app.use("/user", require("./routes/User"));
app.use("/product", require("./routes/Product"));
app.use("/order", require("./routes/Order"));
app.use("/feedback", require("./routes/Feedback"));
app.use("/review", require("./routes/Review"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// create server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
