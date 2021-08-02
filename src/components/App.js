import React from "react";
import TopBar from "./TopBar/TopBar";
import HomeHeader from "./HomeHeader/HomeHeader";
import InfoContainer from "./InfoContainer/InfoContainer";
import InfoContainerText from "./InfoContainer/InfoContainerText";
import InfoContainer2 from "./InfoContainer2/InfoContainer2";
import InfoContainerText2 from "./InfoContainer2/InfoContainerText2";
import Footer from "./Footer/Footer";

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
      <InfoContainer2 
        headerText = {InfoContainerText2[0].headerText}
        bodyText = {InfoContainerText2[0].bodyText}
        image = {InfoContainerText2[0].image}
        buttonText = {InfoContainerText2[0].buttonText}        
      />
      <InfoContainer  
        headerText = {InfoContainerText[1].headerText}
        bodyText = {InfoContainerText[1].bodyText}
        buttonText = {InfoContainerText[1].buttonText}        
      />
      <Footer />
    </div>
  );
}

export default App;
