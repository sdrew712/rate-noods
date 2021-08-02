import React from "react";
import "./info-container.scss"

function InfoContainer(props){
    return(
        <div className="style-1">
            <h2 className="header-text">{props.headerText}</h2>
            <p className="style-1-p">{props.bodyText}</p>
            <button type="button">{props.buttonText}</button>
        </div>            
    )
}

export default InfoContainer;