import React from "react";
import TopBar from "./TopBar/TopBar";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <HomeHeader />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
