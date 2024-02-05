import React, { useEffect, useState } from "react";
import axios from "axios";
import { Songs } from "../Data/IDS";
import { FaArrowRightLong, FaHeadphones } from "react-icons/fa6";
import SongCard from "../Componets/CardComponets/SongCard";
import { setMusic } from "../Redux/MusicCardSlice";
import { useDispatch } from "react-redux";
import Loader from "../Componets/Loader";

const Playlist = () => {
  const [isSong, setSong] = useState([]);
  const [isloading, setloading] = useState(true);
  const dispatch = useDispatch();

  const fetchSongs = async () => {
    const { data } = await axios.get(`https://saavn.me/songs?id=${Songs}`);
    setSong(data.data);
    setloading(false);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <>
      <div className="text-white overflow-y-scroll max-h-[100vh]">
        {isloading ? (
          <Loader />
        ) : (
          <>
            <h1 className="md:text-2xl font-bold flex items-center gap-3 w-[200px] my-5">
              Top Songs
              <span>
                <FaArrowRightLong />
              </span>
            </h1>
            <div className="pb-14">
              {isSong.map((item) => (
                <div
                  key={item.id} // Assign key to the outermost element
                  onClick={() =>
                    dispatch(
                      setMusic({
                        name: item.name.slice(0, 17),
                        img: item.image[1].link,
                        artist: item.primaryArtists,
                        song: item.downloadUrl[4].link,
                      })
                    )
                  }
                >
                  <SongCard
                    img={item.image[1].link}
                    name={item.name.slice(0, 25)}
                    artist={item.primaryArtists}
                    count={item.playCount}
                    icon={<FaHeadphones />}
                    song={item.downloadUrl[4].link}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Playlist;
