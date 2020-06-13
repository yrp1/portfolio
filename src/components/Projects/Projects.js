import React from "react"
import "./Projects.css"
import Facerecognition from "./Facerecognition"
import Robofriends from "./Robofriends"
import MemeGen from "./MemeGen"
import Startup from "./Startup"

class Projects extends React.Component{
	render(){
	return(
		<div className="exp pa4 back" id="projects">
			<div id ="experience" className="container">
				<div className="d-flex flex-column bd-highlight mb-3">
					<div className="p-2 bd-highlight tc b headerexperience head">Projects</div>
				</div>
				<hr/>
				<div className="container-fluid d-flex justify-content-center ">
					<div className="row fntsize">
						<div className="col-md-6 pa2">
							<Facerecognition/>
						</div>
						<div className="col-md-6 pa2">
							<Robofriends/>
						</div>
						<div className="col-md-6 pa2">
							<MemeGen/>
						</div>
						<div className="col-md-6 pa2">
							<Startup/>
						</div>
				</div>
			</div>
		</div>
	</div>
			)
		}
}

export default Projects