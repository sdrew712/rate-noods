import React from "react";
import Title from "./Title/Title";
import TopBar from "./TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Title />
        <TopBar />
      </div>
    </div>
  );
}

export default App;
