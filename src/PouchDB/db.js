import PouchDB from "pouchdb"

function DB (name){
	var db = new PouchDB(name)
	
	async function allForms(){
		var forms = await db.allDocs({include_docs:true})
		return forms
	}
	
	async function createForm(form){
		var s = db.post({ ...form })
		return s
	}
}

export default DB