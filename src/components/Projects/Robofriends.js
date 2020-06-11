import React from "react"
import robo from "./robo.png"

const Robofriends = () => {
	return(

			<div className="card text-center"> 
						<div className="overflow">
							<img className="img-fluid card-img-top"alt="img"src={robo}/>
						</div>
						<div className="card-body text-dark">
							<h4><b>Robofriends</b></h4>
							<p>React | Tachyons | Redux </p>
							<a href="https://yrp1.github.io/robofriends/" className="btn btn-outline-success">Robofriends</a>
						</div>	
					</div>
		)
}

export default Robofriends