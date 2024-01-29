import axios from "axios";
import React, { useEffect, useState } from "react";
import { setMusic } from "../../Redux/MusicCardSlice";
import { useDispatch } from "react-redux";
const Recmodation = () => {
  const dispatch = useDispatch();
  const [Rsong, setRsong] = useState([]);
  const RcSongs = async () => {
    const { data } = await axios.get(
      `https://saavn.me/songs?id=G6r91Mgl,csaEsVWV,VCeN_rCT,4NRpZd1v,cKPYXoDl`
    );

    setRsong(data.data);
  };
  useEffect(() => {
    RcSongs();
  }, []);
  return (
    <>
      <div className="text-[#adadad] mt-10 mx-5 md:block hidden">
        <h1 className="text-2xl font-bold">My Recommended</h1>
        <div className="borer border-yellow-500 w-[100%] mt-4 overflow-auto">
          {Rsong.map((item) => {
            return (
              <div
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
                className="flex items-center justify-between mb-4 cursor-pointer"
                key={item.id}
              >
                <div className="max-w-[50px]">
                  <img src={item.image[1].link} alt="" className="rounded-md" />
                </div>
                <div className="flex-grow ml-4 hover:text-white transition-all 0.5s">
                  <h3 className="text-lg font-semibold">
                    {item.name.slice(0, 17)}
                  </h3>
                  <p className="text-sm">{item.primaryArtists}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recmodation;
