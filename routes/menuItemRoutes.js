const express = require('express');
const router = express.Router();
const MenuItem = require("./../models/menuItem");

//POST method for MenuITEM
router.post("/", async (req, res) => {
    try {
      const data2 = req.body; //Assuming the requist body contains the person data
  
      //Create a new Person document using the MOngoose model
      const newMenuItem = new MenuItem(data2);
  
      //Save the new person
      const response = await newMenuItem.save();
  
      console.log("data saved successfully");
      res.status(200).json(response);
    } catch (error) {
      console.log("Error saving person:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  //GET method to get the MenuItem
router.get("/", async (req, res) => {
    try {
      const data2 = await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data2);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

// router.put('/', asyn( req,res) => {
//   try {
//     const datae , aawit Menut
//   }
// })

// // router.delete('/:id', async(req,res) => {
// //   const personId = req.params.id; //Extract the person's ID from the URL parameter

// //   //Assuming you have a Person model
// //   const response = await MenuItem.findbyIdAndRemove(personId);
// //   if(!response) {
// //     return res.status(404).json({error: 'Person not found'});
// //   }
// //   console.log('data delete');
// //   res.status(200).json({message: 'person Deleted Successfully'});
// // }catch(err){
// //   console.log(err);
// //   res.status(500).json({eror: 'Internal Server Error'});
// // }

// // })

  module.exports = router;