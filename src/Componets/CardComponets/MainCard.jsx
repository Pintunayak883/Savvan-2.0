import React from "react";

const MainCard = ({ img, name, fan }) => {
  return (
    <>
      <div className="max-w-[100%] rounded-md flex flex-col items-center justify-center my-5">
        <div className="w-[150px] h-[150px]">
          <img src={img} alt="" className="w-[100%] rounded-md" />
        </div>
        <div className="text-center">
          <h2 className="text-sm ">{name}</h2>
          <p className="pt-1">{fan}</p>
        </div>
      </div>
    </>
  );
};

export default MainCard;
