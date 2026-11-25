//server start
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

// Connect to the database
connectDB();

console.log("SERVER.JS IS RUNNING");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});