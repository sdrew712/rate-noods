import React from "react";
import "./info-container2.scss"

function InfoContainer2(props){
    return(
        <div className="style-2">
            <div className="container-2">
                <h2 className="header-text2">{props.headerText}</h2>
                <p className="p2">{props.bodyText}</p>
                <button type="button" className="btn2">{props.buttonText}</button>
            </div>
            <img src={props.image} alt="tasty_meal" className="meal"/>
        </div>            
    )
}

export default InfoContainer2;