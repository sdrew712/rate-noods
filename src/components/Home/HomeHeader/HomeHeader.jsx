import React from "react";
import "./home-header.scss"
import Panda from "../../panda.png"

export default function HomeHeader(){
	return(
		<div className="header">
			<img className="panda" src={Panda} alt="panda_eating_noodles" />    
			<div className="header-text-container">                            
				<h1 className="site-title">Rate Noods</h1>
				<h3 className="bottom-text">Your one stop for everything instant noodles.</h3>
			</div>
		</div>
    )
}