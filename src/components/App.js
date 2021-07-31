import React from "react";
import TopBar from "./TopBar/TopBar";
import HomeHeader from "./HomeHeader/HomeHeader";
import InfoContainer from "./InfoContainer/InfoContainer";
import InfoContainerText from "./InfoContainer/InfoContainerText";
import InfoContainer2 from "./InfoContainer2/InfoContainer2";
import InfoContainerText2 from "./InfoContainer2/InfoContainerText2";

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
      <InfoContainer2 
        style = {InfoContainerText2[0].style}
        headerText = {InfoContainerText2[0].headerText}
        bodyText = {InfoContainerText2[0].bodyText}
        image = {InfoContainerText2[0].image}
        buttonText = {InfoContainerText2[0].buttonText}        
      />
      <InfoContainer 
        style = {InfoContainerText[1].style}      
        headerText = {InfoContainerText[1].headerText}
        bodyText = {InfoContainerText[1].bodyText}
        buttonText = {InfoContainerText[1].buttonText}        
      />
    </div>
  );
}

export default App;
