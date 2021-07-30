import React from "react";
import "./info-container.scss"

function InfoContainer(props){
    return(
        <div className={props.style}>
            <h2 className="header-text">{props.headerText}</h2>
            <p>{props.bodyText}</p>
            <button type="button">{props.buttonText}</button>
        </div>            
    )
}

export default InfoContainer;