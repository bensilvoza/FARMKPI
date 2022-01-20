

var express = require("express");
var router  = express.Router();
var Form = require("../models/form")


router.get("/supervisor", async function (req, res){
	var forms = await Form.find({})
	res.json(forms)
})

router.get("/supervisor/:id", async function (req, res){
	var id = req.params.id
	var form = await Form.findById(id)
	res.json(form)
})

router.post("/supervisor", async function (req, res){
	var forms = req.body
	
	for (var i = 0; i < forms.length; i++){
		 var sendForm = new Form({form:forms[i]})
         await sendForm.save()
	}
	res.json("online")
})

router.post("/supervisor/updateSupervisorName/:id", async function (req, res){
	var id = req.params.id
	var form = await Form.findById(id)
	form["form"]["supervisorName"] = req.body.nameOfSupervisor
	delete form["form"]["_id"]
	//console.log(form["form"])
	var send = await Form.findByIdAndUpdate(id, form)
	//console.log(send)
	res.json("Supervisor name added")
})


// exports
module.exports = router;