import React from "react";
import MenuData from "../../Data/Menudata";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className="text-[#adadad] mt-10 mx-5">
        <h1 className="text-2xl font-bold hidden md:block">Menu</h1>
        {MenuData.map((item) => {
          return (
            <NavLink key={item.id} to={`${item.path}`}>
              <div className="flex items-center mt-5 text-xl gap-2 pl-2 cursor-pointer transition-all 0.5s text-white border-l-2 border-transparent hover:border-green-400 rounded-sm">
                <i className="">{item.icon}</i>
                <h3 className="font-bold md:block hidden">{item.name}</h3>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
