import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login"
import SignUp from "./pages/signup"
import EvaluatorCreate from "./pages/evaluator/create"

function App (){
    return (
      <div>
		<BrowserRouter>
		<Routes>
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/signup" element={<SignUp />} />
			<Route exact path="/evaluator/create" element={<EvaluatorCreate />} />
			
		</Routes>
		</BrowserRouter>
      </div>
    );
}

export default App;
