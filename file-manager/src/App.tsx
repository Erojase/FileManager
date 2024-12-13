import React from "react";
import TopMenu from './components/TopMenu';
import LateralBar from "./components/LateralBar";
import MainView from "./components/MainView";

const App = () => {
  return (
    <>
      <TopMenu></TopMenu>
      <div style={{ display: "flex", height: "85vh" }}>
        <LateralBar></LateralBar>
        <MainView></MainView>
      </div>
    </>
  );
};

export default App;