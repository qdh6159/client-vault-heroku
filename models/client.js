const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  name: String,
  value: String,
  rating: String,
  retirement: String,
  address: String,
  birth: String,
  notes: String,
  profession: String

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

module.exports = mongoose.model('Client', clientSchema);
