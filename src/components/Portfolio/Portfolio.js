import React from "react"
import facerecog from "./facerecog.png"
import robo from "./robo.png"
import meme from "./meme.png"
import "./Portfolio.css"

const Portfolio = () =>{
	return(
		<div className="bg-light-gray ml3 mr3">
			<div className="container ">
						<div className="d-flex flex-column bd-highlight mb-3">
						  <div className="p-2 bd-highlight tc b f2 head">PortFolio</div>
						</div>
			</div>

			<div className="container">	
				<img src={facerecog} className="img-fluid br3 grow" alt="Responsive image"/> 
					<div className="p-2 bd-highlight tc f3 t1 b tc bg dib br4 pa3 ma2 bw2 shadow-5 mt4 br-pill">FaceRecognition</div>
					<span className="f4 mt0 light-purple">React | Tachyons | Tilt | Particles | ClarifaiAPI</span> 
				<img src={robo} className="img-fluid br3 grow mt3" alt="Responsive image"/>
					<div className="p-2 bd-highlight tc  f3 dib mb4 br4 b bg1 pa3 ma2 bw2 shadow-5 mt4 br-pill">RoboFriends</div> 
					<span className="f4 mt0 dark-blue">React | Tachyons | Redux | </span> 
				<img src={meme} className="img-fluid br3 grow mt3" alt="Responsive image"/>
					<div className="p-2 bd-highlight tc f3 mb4 dib b bg2 pa3 ma2 bw2 shadow-5 mt4 br-pill">Meme Generator</div>
					<span className="f4 mt0 brown">React | API | </span>  
			</div>
		</div>
		)
}

export default Portfolio