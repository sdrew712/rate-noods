import React from "react";
import GitHubLogo from "./github-logo-64px.png"
import LinkedInLogo from "./linkedin-logo.png"
import "./footer.scss"

export default function Footer(){
  return(
    <div className="footer">
      <p className="credits">Made with ♥ by Sarah Drew</p>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/sarah-drew-dev/"><img src={LinkedInLogo} alt="linkedin_logo" className="linkedin-logo"/></a>
        <a href="https://github.com/sdrew712"><img src={GitHubLogo} alt="github_logo" className="github-logo"/></a>
      </div>
    </div>
  )
}