const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    //Create a new Person document using the MOngoose model
    const newPerson = new Person(data);

    //Save the new person
    const response = await newPerson.save();

    console.log("data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error saving person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method for person/work
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("data fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (err) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//UPDATE OPERATION
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the URL parameter
    const updatedPersonData = req.body; //updated data for the person

    const response = await Person.findByIdAndUpdate(personId,updatedPersonData,
      {
        new: true, //Return the updated document
        runValidators: true, //Run Mongoose validation
      })

      if(!response){
        return res.status(404).json({error: 'person not found'})
      }

    console.log("data updated");
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// DELETE OPERATION
router.delete('/:id', async(req,res) => {
  try{
    const personId = req.params.id; //Extract the person's ID from the URL parameter

  //Assuming you have a Person model
  const response = await Person.findByIdAndRemove(personId);
  if(!response) {
    return res.status(404).json({error: 'Person not found'});
  }
  
  console.log('data deleted');
  res.status(200).json({message: 'person Deleted Successfully'});
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

module.exports = router;
