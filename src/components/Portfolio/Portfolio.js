import React from "react"
import facerecog from "./facerecog.png"
import robo from "./robo.png"
import meme from "./meme.png"
import "./Portfolio.css"

const Portfolio = () =>{
	return(
		<div className="bg-light-gray">
			<div className="container ">
						<div className="d-flex flex-column bd-highlight mb-3">
						  <div className="p-2 bd-highlight tc b f1 head">PortFolio</div>
						</div>
			</div>

			<div className="container">	
				<img src={facerecog} className="img-fluid" alt="Responsive image"/> 
				<div className="p-2 bd-highlight tc  f3  mb4">FaceRecognition</div> 
				<img src={robo} className="img-fluid" alt="Responsive image"/>
				<div className="p-2 bd-highlight tc  f3  mb4">RoboFriends</div> 
				<img src={meme} className="img-fluid" alt="Responsive image"/>
				<div className="p-2 bd-highlight tc  f3  mb4">Meme Generator</div> 
			</div>
		</div>
		)
}

export default Portfolio