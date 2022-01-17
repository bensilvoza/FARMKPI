
import React, {useEffect} from 'react'

function Home() {
	
	useEffect(async function (){
		if (localStorage.getItem("loginApproved") === "true"){
			return window.location = "/" + localStorage.getItem("role")
		} else return window.location = "/login" 
	}, [])
	
	
  return (
    <div>	

    </div>
  );
}

export default Home;