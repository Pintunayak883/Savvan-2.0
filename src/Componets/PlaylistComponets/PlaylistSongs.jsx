import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaHeadphones } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SongCard from "../CardComponets/SongCard";
const PlaylistSongs = () => {
  const [listsong, setlistsong] = useState([]);
  const { data } = useSelector((state) => state.Song.song);
  useEffect(() => {
    if (data && data.songs) {
      setlistsong(data.songs);
    }
  }, [data]);

  return (
    <>
      <div className="text-white  overflow-y-scroll max-h-[100vh]">
        <div className="flex items-center justify-between md:max-w-[100%] w-full px-3">
          <NavLink to="/">
            <FaArrowLeftLong className="text-white text-2xl md:ml-10 my-3" />
          </NavLink>
          <h2 className="text-white text-3xl text-center flex justify-center items-center font-bold pb-1 border-b-2 border-gray-500 w-[100%]">
            Playlist Song's
          </h2>
        </div>
        <div className="mt-5 pb-12">
          {listsong.map((item) => {
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

export default PlaylistSongs;
