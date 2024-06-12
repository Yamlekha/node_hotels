const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //will store data in req.body


const MenuItem = require("./models/menuItem");

app.get("/", function (req, res) {
  res.send("Welcome to my hotel");
});


//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// var _ = require('lodash');

// console.log('server file is available');

// var age = notes.age;

// var result = notes.addNumber(age+18, 19);
// console.log(result);

// var array = ['yamlekha', 'yamlekha' , 1 ,2,1,2,'nagpal', 'nagpal' , '2']
// var filter = _.uniq(array);

// console.log(filter);
