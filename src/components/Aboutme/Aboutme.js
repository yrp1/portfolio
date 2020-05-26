import React from "react"
import "./Aboutme.css"
import yrp from "./yrp.jpg"

const Aboutme = () => {
	return(
		<div>
			<div className="container mb5">
						<div className="d-flex flex-column bd-highlight mb-3">
						  <div className="p-2 bd-highlight tc b f1 ">Yash Patel</div>
						  <div className="p-2 bd-highlight tc  i f4 about pa0">AboutMe</div>
						</div>

						<div className="d-flex flex-row bd-highlight mb-3 justify-content-start">
					  <div className="  bd-highlight  "><img className="img-fluid yash pa3 br3 shadow-2 grow"alt="img"src={yrp}/></div>
					  <div className="p-2 bd-highlight text pa2 br3 ml4"><strong>Hey, I'm Yash Patel, frontend developer. 
									I have a MEng degree in Electrical and Computer
									Engineering from the University of Ottawa. Self and quick learner, 
									highly motivated in learning and developing new skills. <br/><br/>Experienced in HTML/HTML5, CSS/CSS3, SemanticUI, Responsive Design, Flexbox,
									CSS Grid, Bootstrap 4, DOM Manipulation, Javascript, Asynchronous JavaScript, HTTP/JSON/AJAX, React + Redux, NPM, Git and Github
									<br/><br/>
									Currently I am seeking for new opportunities as a Frontend Developer. 
									</strong></div>
 
					</div>
			</div>
			
		</div>
		)
}

export default Aboutme;