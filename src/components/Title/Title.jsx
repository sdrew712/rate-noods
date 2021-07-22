import React from "react";
import "./title.scss";
import noodleBowl from "./noodle-bowl.png";

function Title(){
    return (
        <header>
            <div className="title-text">            
                <img className="soup-picture" src={noodleBowl} alt="noodle_bowl" />      
                <a className="site-title" href=""><b>Rate Noods</b></a>
                <h2>Instant noodle connoisseur</h2>
            </div>
        </header>
    )
}

export default Title;