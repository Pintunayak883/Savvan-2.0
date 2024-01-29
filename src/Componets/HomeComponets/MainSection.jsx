import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Slider from "./Slider";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get("https://saavn.me/modules?language=hindi");
    const { data } = res.data;
    setAlbums(data.albums);
    setTrending(data.trending);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  const trendingAlbums = useMemo(
    () => (Array.isArray(trending.albums) ? trending.albums : []),
    [trending.albums]
  );

  return (
    <section className="md:pb-[80px] pb-[220px]">
      <h2 className="text-xl md:pl-10 pl-2 py-3 font-semibold text-white w-full lg:w-[78vw] mx-auto">
        Trending Now
      </h2>
      <Slider data={trendingAlbums} />
      <h2 className="text-xl md:pl-10 pl-2 py-3 font-semibold text-white w-full lg:w-[78vw] mx-auto">
        Top Albums
      </h2>
      <Slider data={albums} />
    </section>
  );
};

export default MainSection;
