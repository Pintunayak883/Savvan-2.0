import React from "react";
import { FaSpotify } from "react-icons/fa";
import Menu from "../LeftBox/Menu";
import Recmodation from "../LeftBox/Recmodation";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  return (
    <>
      <div
        className="min-w-[25%] min-h-[100vh]"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <NavLink
          to="/"
          className="text-white hidden md:flex items-center justify-center text-center mx-0 my-2"
        >
          <img
            src="images/jio-savvan.png"
            alt="hello"
            className="w-[60px] md:block flex items-center justify-center"
          />
          <h2 className="lg:text-2xl text-2xl mt-2 font-bold text-center md:w-[35%]">
            Jio Savvan
          </h2>
        </NavLink>
        <Menu />
        <Recmodation />
      </div>
    </>
  );
};

export default LeftSide;
