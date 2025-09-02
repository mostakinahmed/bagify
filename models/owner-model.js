const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  isadmin: Boolean,
  product:{
    type: Array,
    default: [],
  },
  picture: String,
});

const owner = mongoose.model("owner", ownerSchema);
module.exports = owner;
