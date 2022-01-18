
var express = require("express");
var router  = express.Router();
var Form = require("../models/form")

// get > evaluator
router.get("/evaluator", function (req, res){
	
})

// post > evaluator
router.post("/evaluator", async function (req, res){
	var forms = req.body
	
	for (var i = 0; i < forms.length; i++){
		 var sendForm = new Form({form:forms[i]})
         await sendForm.save()
	}
	res.json("online")
})



// exports
module.exports = router;