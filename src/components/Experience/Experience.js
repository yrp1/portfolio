import React from "react"
import "./Experience.css"
import uottawa from "./uottawa.jpg"

const Experience = () =>{
	return(
			<div className="container mb3" id="Experience">
						<div className="d-flex flex-column bd-highlight mb-3">
						  <div className="p-2 bd-highlight tc b head">Experience</div>
						</div>
						<hr/>
						<div className="row">
						  <div className="col-md-4">
						  	<h4>FaceRecognition App</h4>
						  	<p>This application is conceived in React. And when any image is uploaded it will detect person's faces. 
						  	This app is able to detect faces with the aid of CLarifai Api. This app also includes features such as SignIn / Signout and Register forms.
						  	</p>
						  </div>
						  <div className="col-md-4">
						  	<h4>Robofriends App</h4>
						  	<p>This application is designed in React. User can search for any robot and it will filter out robots with help of javascript functionalities.
						  	In this app redux is also implemented to access different states present in this app. Here an external API is used to fetch data of robots. 
						  	</p>
						  </div>
						  <div className="col-md-4">
						  	<h4>Meme Generator</h4>
						  	<p>This application is designed in React. User can wite any text they want and it will update the state and meme is generated and if user clicks on 
						  	Gen button another pic will be displayed with same text. Here an external API is used to generate random picture. 
						  	</p>
						  </div>
						</div>
						<hr/>
						 <div className="col-md-4 dib">
						  	<img src={uottawa} className="img-responsive br-pill" alt="uottawa"/>
						  	<p>Graduated from University of Ottawa as a Electrical and Computer Engineer</p>
						  	<b>2018-2020</b>
						  </div>
			</div>
		)
}

export default Experience