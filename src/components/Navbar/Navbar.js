import React from "react"
import bg from "./bg.jpg"
import "./Navbar.css"
import { Link } from "react-scroll"

const Navbar = () => {
	return(
	<div id = "home" >
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light add" role="navigation">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			       <li className="nav-item active">
			        <Link
					    activeClass="active"
					    to="home"
					    spy={true}
					    smooth={true}
					    offset={-10}
					    duration= {500}>
					    Home </Link>

			      </li>
			      <li className="nav-item active">
			        <Link
					    activeClass="active"
					    to="aboutme"
					    spy={true}
					    smooth={true}
					    offset={-10}
					    duration= {500}>
					    Aboutme </Link>

			      </li>
			      <li className="nav-item active">
			        <Link
					    activeClass="active"
					    to="portfolio"
					    spy={true}
					    smooth={true}
					    offset={-20}
					    duration= {500}>
					    Portfolio </Link>
			      </li>
			   
			    </ul>
  			  </div>
			</nav>
			<div className="container-fluid br3 pa4  ml1 mr1">
				<img src={bg} className="img-fluid" alt="background"/>

						<div className="container-fluid d-flex flex-column bd-highlight ">
						  <div className="name">HEY,I'M Yash</div>
						  <div className="frontend">frontend developer</div>
						</div>

			</div>
	</div>
		
		)
}

export default Navbar