import React from "react";
import noodleBowl from "./noodle-bowl.png";
import "./top-nav.css"

function TopNav(){
    return(
        <div className="top-nav">
            <div className="title-text">            
                <img className="soup-picture" src={noodleBowl} alt="noodle_bowl" />      
                <a className="site-title" href=""><b>Rate Noods</b></a>
                <h2>Instant noodle connoisseur</h2>
            </div>

            <div className="nav-bar">
                <a className="active" href="#home">Home</a>
                <a href="#reviews">Noodle Reviews</a>
                <a href="#upgrades">Upgrade Your Noodles</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default TopNav;