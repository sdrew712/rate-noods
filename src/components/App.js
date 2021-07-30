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
        headerText = {InfoContainerText[0].headerText}
        bodyText = {InfoContainerText[0].bodyText}
        buttonText = {InfoContainerText[0].buttonText}        
      />
      {/* <InfoContainer 
        headerText = {InfoContainerText[1].headerText}
        bodyText = {InfoContainerText[1].bodyText}
        buttonText = {InfoContainerText[1].buttonText}        
      /> */}
    </div>
  );
}

export default App;
