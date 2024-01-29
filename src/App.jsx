import React from "react";
import LeftSide from "./Componets/Sides/LeftSide";
import RightSide from "./Componets/Sides/RightSide";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative md:flex overflow-hidden bg-[#282828]">
        <div className="w-1/4 h-auto hidden md:block">
          <LeftSide />
        </div>
        <div className="flex-1 md:w-[75%] w-[100%]  h-auto">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default App;
