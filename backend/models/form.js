

var mongoose = require("mongoose");

// Form
var formSchema = new mongoose.Schema({ form:{} });
var Form = mongoose.model('Form', formSchema);

module.exports = Form;