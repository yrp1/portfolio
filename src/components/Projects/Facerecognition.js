import React from "react"
import facerecog from "./facerecog.png"

const Facerecognition = () => {
	return(

			<div className="card text-center"> 
						<div className="overflow">
							<img className="img-fluid card-img-top"alt="img"src={facerecog}/>
						</div>
						<div className="card-body text-dark">
							<h4><b>Facerecognition</b></h4>
							<p>React | Tachyons | Tilt | Particles | ClarifaiAPI</p>
							<a href="https://yrp1.github.io/facerecognition/" className="btn btn-outline-success mb1">Facerecognition</a>
						</div>	
					</div>
		)
}

export default Facerecognition