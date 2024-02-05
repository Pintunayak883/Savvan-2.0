import axios from "axios";
import React, { useEffect, useState } from "react";
import { album } from "../Data/IDS";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSong } from "../Redux/SongCardSlice";
import Loader from "../Componets/Loader";
const Albmue = () => {
  const [topAlbum, setAlbum] = useState([]);
  const [isloading, setloading] = useState(true);
  const dispatch = useDispatch();
  const fetchSong = async (ids) => {
    try {
      const req = ids.map((id) =>
        axios.get(`https://saavn.me/albums?id=${id}`)
      );
      const respo = await Promise.all(req);

      const albums = respo.map((d) => d.data);
      setAlbum(albums);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSong(album);
  }, []);

  return (
    <>
      <div className="text-white  overflow-y-scroll max-h-[100vh]">
        {isloading ? (
          <Loader />
        ) : (
          <>
            <h1 className="md:text-2xl font-bold flex items-center gap-3 w-[200px] my-5">
              Top Albume
              <span>
                <FaArrowRightLong />
              </span>
            </h1>
            <div className="flex flex-wrap gap-3 items-center justify-center z-0 pb-12">
              {topAlbum &&
                topAlbum.map((item) => {
                  return (
                    <NavLink
                      onClick={() => dispatch(setSong(item))}
                      to={`/albumsong`}
                      key={item.id}
                      className="max-w-[80%] rounded-md items-center justify-center"
                    >
                      <div className="w-[150px] h-[150px]">
                        <img
                          src={item.data.image[1].link}
                          alt=""
                          className="w-[100%] rounded-md"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-sm ">
                          {item.data.name.slice(0, 17)}
                        </h2>
                        <p className="pt-1">{item.data.releaseDate}</p>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Albmue;
