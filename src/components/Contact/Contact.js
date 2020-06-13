import React from "react"
import email from "./email.png"
import github from "./github.png"
import linkedin from "./linkedin.png"


const Contact = () =>{
	return(
			<div className="container" id="Contact">
						<div className="d-flex flex-column bd-highlight mb-3">
						  <div className="p-2 bd-highlight tc b head">Contact</div>
						</div>
						<hr/>
						<div className="row">
						  <div className="col-md-4 pa2">
						  	<img src={email} className="img-responsive br-pill" alt="email"/>
						  	<h4>Email</h4>
						  	<span><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmlkCbMHppDJQXpKHlHFGJGfZdRjzTtSwJxdnZvfVrKwQSXlcCqjrGkLRcBGqhJwDJwmJJ"
						  	className="btn btn-outline-success">E-mail</a></span>
						  </div>
						  <div className="col-md-4 pa2">
						  	<img src={github} className="img-responsive br-pill" alt="github"/>
						  	<h4>Github</h4>
						  	<span><a href="https://github.com/yrp1" className="btn btn-outline-success">GitHub</a></span>
						  </div>
						  <div className="col-md-4 pa2">
						  	<img src={linkedin} className="img-responsive br-pill" alt="linkedin"/>
						  	<h4>Linkedin</h4>
						  	<span><a href="https://www.linkedin.com/in/yash-patel-aa9b28115/" className="btn btn-outline-success">Yash Patel</a></span>
						  </div>
						</div>
			</div>
		)
}

export default Contact