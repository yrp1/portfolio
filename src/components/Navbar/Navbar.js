import React from "react"
import bg from "./bg.jpg"
import "./Navbar.css"
import { Link } from "react-scroll"

const Navbar = () => {
	return(
	<div id = "home" >
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light add" role="navigation">
			  <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
			  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
			    <span className="navbar-toggler-icon"></span> Menu
			  </button>

			  <div className="navbar-collapse collapse" id="navbarSupportedContent">
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
					    to="projects"
					    spy={true}
					    smooth={true}
					    offset={-10}
					    duration= {500}>
					    Projects </Link>
			      </li>
			      <li className="nav-item active">
			        <Link
					    activeClass="active"
					    to="Experience"
					    spy={true}
					    smooth={true}
					    offset={-10}
					    duration= {500}>
					    Experience </Link>
			      </li>
			       <li className="nav-item active">
			        <Link
					    activeClass="active"
					    to="Contact"
					    spy={true}
					    smooth={true}
					    offset={-10}
					    duration= {500}>
					    Contact </Link>
			      </li>
			   
			    </ul>
  			  </div>
			</nav>
			<img src={bg} className="img-fluid image" alt="background"/>
			<div className="container-fluid">
				<div className="trail">YASH PATEL</div>
				<div className="trailjob"><br/><i>FRONTEND DEVELOPER </i></div>
						
			</div>
	</div>
		
		)
}

export default Navbar