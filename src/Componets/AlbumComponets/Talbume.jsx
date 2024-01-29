import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaHeadphones } from "react-icons/fa6";
import SongCard from "../CardComponets/SongCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Talbume = () => {
  const [issong, setsong] = useState([]);
  const Params = useParams();
  const fetchSong = async () => {
    const { data } = await axios.get(`https://saavn.me/albums?id=${Params.id}`);
    setsong(data.data.songs);
  };
  useEffect(() => {
    fetchSong();
  }, []);
  return (
    <>
      <div className="text-whiteoverflow-y-scroll max-h-[100vh]">
        <div className="flex items-center justify-between md:max-w-[100%] w-full px-3">
          <NavLink to="/">
            <FaArrowLeftLong className="text-white text-2xl md:ml-10 my-3" />
          </NavLink>
          <h2 className="text-white text-3xl text-center flex justify-center items-center font-bold pb-1 border-b-2 border-gray-500 w-[100%]">
            Song's
          </h2>
        </div>

        <div className="">
          {issong.map((item) => {
            return (
              <div key={item.id} className="pb-14">
                <SongCard
                  img={item.image[1].link}
                  name={item.name.slice(0, 25)}
                  artist={item.primaryArtists}
                  count={item.playCount}
                  icon={<FaHeadphones />}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Talbume;
