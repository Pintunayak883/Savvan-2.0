import React from "react";
import { setMusic } from "../../Redux/MusicCardSlice";
import { useDispatch } from "react-redux";

const SongCard = ({ name, img, artist, count, icon, song }) => {
  const dispatch = useDispatch();
  const formatSongCount = (count) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return (count / 1000000).toFixed(1) + " million";
    }
  };
  return (
    <>
      <div
        onClick={() =>
          dispatch(
            setMusic({
              name: name,
              img: img,
              artist: artist,
              song: song,
            })
          )
        }
        className="w-[100%] cursor-pointer mt-3 min-h-[10vh] flex items-center justify-between py-3 text-white  border-b-2 border-gray-500 overflow-y-hidden px-3 "
      >
        <div className="flex items-center gap-4 md:w-[30%]">
          <img src={img} alt="" className="w-[100px] rounded-lg" />
          <h3>{name}</h3>
        </div>
        <div className="hidden md:flex text-center w-[40%]">
          <p>{artist}</p>
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <p>{formatSongCount(count)}</p>
          <i>{icon}</i>
        </div>
      </div>
    </>
  );
};

export default SongCard;
