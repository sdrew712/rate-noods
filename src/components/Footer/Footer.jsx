import React from "react";
import GitHubLogo from "./github-logo-64px.png"
import LinkedInLogo from "./linkedin-logo.png"
import "./footer.scss"

function Footer(){
    return(
        <div className="footer">
            <p className="credits">Made with ♥ by Sarah Drew</p>
            <div className="icon-container">
                <img src={LinkedInLogo} alt="linkedin_logo" className="linkedin-logo"/>
                <img src={GitHubLogo} alt="github_logo" className="github-logo"/>
            </div>
        </div>
    )
}

export default Footer;