import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaHeadphones } from "react-icons/fa6";
import SongCard from "../CardComponets/SongCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AlbumSong = () => {
  const { data } = useSelector((state) => state.Song.song);
  const [issong, setsong] = useState([]);

  useEffect(() => {
    // Update the state when data.songs changes
    if (data && data.songs) {
      setsong(data.songs);
    }
  }, [data]);

  return (
    <>
      <div className="text-white overflow-y-scroll max-h-[100vh]">
        <div className="flex items-center justify-between md:max-w-[100%] w-full px-3">
          <NavLink to="/Albume">
            <FaArrowLeftLong className="text-white text-2xl md:ml-10 my-3" />
          </NavLink>
          <h2 className="text-white text-3xl text-center flex justify-center items-center font-bold pb-1 border-b-2 border-gray-500 w-[100%]">
            Album Song's
          </h2>
        </div>
        <div className="pb-14">
          {issong.map((item) => {
            return (
              <SongCard
                key={item.id}
                img={item.image[1].link}
                name={item.name.slice(0, 25)}
                artist={item.primaryArtists}
                count={item.playCount}
                icon={<FaHeadphones />}
                song={item.downloadUrl[4].link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AlbumSong;
