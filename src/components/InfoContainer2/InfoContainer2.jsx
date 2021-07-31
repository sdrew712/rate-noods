import React from "react";
import "./info-container2.scss"

function InfoContainer2(props){
    return(
        <div className={props.style}>
            <div className="container">
                <h2 className="header-text">{props.headerText}</h2>
                <p>{props.bodyText}</p>
                <button type="button">{props.buttonText}</button>
            </div>
            <img src={props.image} alt="tasty_meal" />
        </div>            
    )
}

export default InfoContainer2;