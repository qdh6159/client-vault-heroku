const express = require('express');
// Next we set up the Router
const router = express.Router();
const bodyParser     = require('body-parser');

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Client = require('../models/client');
// Creating the index route
// index route should show all the clients


 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {
        // res.send("this is the plant page")
      const allClients = await Client.find().populate('user');
      console.log(allClients)
      // This is the response to react
      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allClients
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    // req.body.user = req.session.userId;
    const createdPlant = await Client.create(req.body);
    console.log('response happening?')
    res.json({
      status: {
            code: 201,
            message: "Resource successfully created"
          },
      data: createdPlant
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





// router.get('/:id', async (req, res, next) => {


//      try  {

//         const foundMovie = await Movie.findById(req.params.id);
//         res.json({
//           status: {
//             code: 200,
//             message: "Success"
//           },
//           data: foundMovie
//         });

//       } catch (err){
//         res.send(err);
//       }



// });

router.put('/:id', async (req, res) => {

  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 201,
            message: "Resource successfully updated"
          },
      data: updatedClient
    });
  } catch(err){
    res.send(err)
  }
});


// // Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedClient = await Client.findByIdAndRemove(req.params.id);
     const allClients = await Client.find()
      res.json({
        status:  {
            code: 200,
            message: "Resource successfully deleted"
          },
        data: allClients
      });
      
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
