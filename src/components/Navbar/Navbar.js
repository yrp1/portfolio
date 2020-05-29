import React from "react"
import bg from "./bg.jpg"
import "./Navbar.css"

const Navbar = () => {
	return(
	<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light tab">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">About Me <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Projects</a>
			      </li>
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Experience</a>
			      </li>
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Contact</a>
			      </li>
			    </ul>
  			  </div>
			</nav>
			<div className=" br3 pa4  ml1 mr1">
				<img src={bg} className="img-fluid" alt="Responsive image"/>
				
						<div className="container-fluid d-flex flex-column bd-highlight ">
						  <div className="name">HEY,I'M Yash</div>
						  <div className="frontend">frontend developer</div>
						</div>
					
			</div>
	</div>
		
		)
}

export default Navbar