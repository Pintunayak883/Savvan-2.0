import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeadphones } from "react-icons/fa6";
import SongCard from "../Componets/CardComponets/SongCard";
import Loader from "../Componets/Loader";

const Search = () => {
  const [song, setsong] = useState([]);
  const [search, setsearch] = useState("");
  const [isloading, setloading] = useState(true);

  const SearchSong = async () => {
    if (search.trim() === "") {
      return;
    }
    try {
      const { data } = await axios.get(
        `https://saavn.me/search/songs?query=${search}&page=1&limit=100`
      );
      setsong(data.data.results);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    SearchSong();
  }, [search]);

  return (
    <>
      <div className="text-white  overflow-y-scroll max-h-[100vh]">
        {isloading ? (
          <Loader />
        ) : (
          <div className="mt-10 flex justify-center w-[100%] ">
            <input
              onChange={(e) => setsearch(e.target.value)}
              type="search"
              placeholder="Search You Listen...."
              className="min-w-[90%] p-3 bg-transparent outline-none border-b border-gray-500 text-white text-2xl"
            />
          </div>
        )}

        {song.length === 0 && search.trim() !== "" && (
          <p className="text-center text-white">
            No results found for "{search}"
          </p>
        )}

        {song.map((item) => (
          <div className="mb-14" key={item.id}>
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
  );
};

export default Search;
