const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Productroutes = require("./Routes/Products.routes.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/products", Productroutes);
//general to go to null name space
app.get("/", (req, res) => {
  res.send("Hello World");
});
mongoose
  .connect(
    "mongodb+srv://imkhamzadev:3JEyPBoeNGJUYcIh@crud-app-cluster-node.1a1yr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crud-app-cluster-node"
  )
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
