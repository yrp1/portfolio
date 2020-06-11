import React from "react"
import frontend from "./frontend.png"

const Startup = () => {
	return(

			<div className="card text-center"> 
						<div className="overflow">
							<img className="img-fluid card-img-top"alt="img"src={frontend}/>
						</div>
						<div className="card-body text-dark">
							<h4><b>Startup Page</b></h4>
							<p> HTML | CSS </p>
							<a href="https://yrp1.github.io/Start-Up-Page/" className="btn btn-outline-success">Startup Page</a>
						</div>	
					</div>
		)
}

export default Startup