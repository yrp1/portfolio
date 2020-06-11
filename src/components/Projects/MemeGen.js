import React from "react"
import Meme from "./Meme.png"

const MemeGen = () => {
	return(

			<div className="card text-center"> 
						<div className="overflow">
							<img className="img-fluid card-img-top"alt="img"src={Meme}/>
						</div>
						<div className="card-body text-dark">
							<h4><b>Meme Generator</b></h4>
							<p>React | API </p>
							<a href="https://yrp1.github.io/memegenerator/" className="btn btn-outline-success mb3">MemeGenerator</a>
						</div>	
					</div>
		)
}

export default MemeGen