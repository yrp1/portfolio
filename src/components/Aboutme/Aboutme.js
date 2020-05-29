import React from "react"
import "./Aboutme.css"
import yrp from "./yrp.jpg"

const Aboutme = () => {
	return(
		<div>
			<div className="container-fluid mb5 pa4">
						<div className="d-flex flex-column bd-highlight mb3">
						  <div className="p-2 bd-highlight tc b f1 fontfam">Yash Patel</div>
						  <div className="p-2 bd-highlight tc i f3 about pa0">AboutMe</div>
						</div>

					<div className="row amm">
						  <div className="col-md-5"><img className="img-fluid yash pa3 br3 shadow-2 grow"alt="img"src={yrp}/></div>
						  <div className="col-md-5 text br3 pa4"><p><i>Hey, I'm Yash Patel, frontend developer. 
									I have a MEng degree in Electrical and Computer
									Engineering from the University of Ottawa. Self and quick learner, 
									highly motivated in learning and developing new skills. <br/><br/>Experienced in <b>HTML/HTML5, CSS/CSS3, SemanticUI, Responsive Design, Flexbox,
									CSS Grid, Bootstrap 4, DOM Manipulation, Javascript, Asynchronous JavaScript, HTTP/JSON/AJAX, React + Redux, NPM, Git and Github
									</b><br/><br/>
									Currently I am seeking for new opportunities as a Frontend Developer. 
									</i></p></div>
					</div>
				</div>		
		</div>
		)
}

export default Aboutme;