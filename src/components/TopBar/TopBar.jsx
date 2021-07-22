import React from "react";
import "./top-bar.scss"

function topBar(){
    return(
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#reviews">Noodle Reviews</a>
            <a href="#upgrades">Upgrade Your Noodles</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default topBar;