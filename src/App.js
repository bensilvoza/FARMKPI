import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import EvaluatorCreate from "./pages/evaluator/create"
import EvaluatorForms from "./pages/evaluator/forms"
import EvaluatorForm from "./pages/evaluator/form"
import SupervisorForms from "./pages/supervisor/forms"
import SupervisorForm from "./pages/supervisor/form"
import AdminCreate from "./pages/admin/create"
import Admin from "./pages/admin/admin"

function App (){
    return (
      <div>
		<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/signup" element={<SignUp />} />
			<Route exact path="/evaluator" element={<EvaluatorForms />} />
			<Route exact path="/evaluator/create" element={<EvaluatorCreate />} />
			<Route exact path="/evaluator/:formId" element={<EvaluatorForm />} />
			<Route exact path="/supervisor" element={<SupervisorForms />} />
			<Route exact path="/supervisor/:formId" element={<SupervisorForm />} />
			<Route exact path="/admin/create" element={<AdminCreate />} />
			<Route exact path="/admin" element={<Admin />} />
			
		</Routes>
		</BrowserRouter>
      </div>
    );
}

export default App;
