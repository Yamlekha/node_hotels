const mongoose = require("mongoose");

//Define database connectivity
const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
//Mongoose maintains a default connection object representing the Mongodb connection.
const db = mongoose.connection;

//Define event listener for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection erro: ", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//Export the connection module
