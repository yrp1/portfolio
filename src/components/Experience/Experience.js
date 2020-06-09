import React from "react"
import uottawa from "./uottawa.jpg"
import "./Experience.css"

const Experience = () =>{
	return(
			<div id ="experience" className="exp container">
				<div className="d-flex flex-column bd-highlight mb-3">
					<div className="p-2 bd-highlight tc b headerexperience head">Experience</div>
				</div>
				<div className="row amm">
						  <div className="col-md-5"><img className="img-fluid imag pa3 br3 shadow-2 grow"alt="img"src={uottawa}/></div>
						  <div className="col-md-3 "><h2 className="fntsize">Masters in<br/> <hr/>Electrical and Computer Engineering</h2></div>
						  <div className="col-md-2 "><b>2018-2020</b></div>
					</div>


			</div>
			)
		}

export default Experience