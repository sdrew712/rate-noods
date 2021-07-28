import React from "react";
import "./top-bar.scss"

function TopBar(){
    return(
        <div className="nav-container">
            <a href="#reviews">Reviews</a>
            <a href="#upgrades">Upgrades</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default TopBar;