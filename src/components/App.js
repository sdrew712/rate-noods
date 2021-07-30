import React from "react";
import TopBar from "./TopBar/TopBar";
import HomeHeader from "./HomeHeader/HomeHeader";
import InfoContainer from "./InfoContainer/InfoContainer";
import InfoContainerText from "./InfoContainer/InfoContainerText";

function App() {
  return (
    <div className="App">
      <TopBar />
      <HomeHeader />
      <InfoContainer 
        style = {InfoContainerText[0].style}
        headerText = {InfoContainerText[0].headerText}
        bodyText = {InfoContainerText[0].bodyText}
        buttonText = {InfoContainerText[0].buttonText}        
      />
      <InfoContainer 
        style = {InfoContainerText[1].style}
        headerText = {InfoContainerText[1].headerText}
        bodyText = {InfoContainerText[1].bodyText}
        buttonText = {InfoContainerText[1].buttonText}        
      />
      <InfoContainer 
        style = {InfoContainerText[2].style}      
        headerText = {InfoContainerText[2].headerText}
        bodyText = {InfoContainerText[2].bodyText}
        buttonText = {InfoContainerText[2].buttonText}        
      />
    </div>
  );
}

export default App;
