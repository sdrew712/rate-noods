import React from "react";
import "./header.css";
import noodleBowl from "./noodle-bowl.png";

function Header(){
    return (
        <header>
            <img className="soup-picture" src={noodleBowl} alt="noodle_bowl" />      
            <div className="header-text">
                <h1>Rate Noods</h1>
                <h2>Instant noodle connoisseur</h2>
            </div>
        </header>
    )
}

export default Header;