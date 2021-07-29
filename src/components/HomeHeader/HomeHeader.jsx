import React from "react";
import "./home-header.scss"
import Panda from "./panda.png"

function HomeHeader(){
    return(
        <div>
            <div className="header">
                <img className="panda" src={Panda} alt="panda_eating_noodles" />    
                <div className="header-text">                            
                    <h1 className="site-title">Rate Noods</h1>
                    <h2 className="bottom-text">Your one stop for everything instant noodles.</h2>
                </div>
            </div>
        </div>
    )
}



export default HomeHeader;