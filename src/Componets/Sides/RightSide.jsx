import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Search from "../../Pages/Search";
import Albume from "../../Pages/Albmue";
import Songs from "../../Pages/Songs";
import AlbumSong from "../AlbumComponets/AlbumSong";
import AudioPlayer from "../MusicPlayer.jsx/AudioPlayer";
import PlaylistSongs from "../PlaylistComponets/PlaylistSongs";
import Talbume from "../AlbumComponets/Talbume";
import MobileMenu from "../LeftBox/MoblieMenu";
import Mobilelogo from "../LeftBox/Mobilelogo";
const RightSide = () => {
  return (
    <>
      <div className="min-h-screen min-w-[75%] flex flex-col relative">
        <Mobilelogo />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/albume" element={<Albume />} />
            <Route path="/albumsong" element={<AlbumSong />} />
            <Route path="/audioplayer" element={<AudioPlayer />} />
            <Route path="/playlistsong" element={<PlaylistSongs />} />
            <Route path="/talbume/:id" element={<Talbume />} />
          </Routes>
        </div>
        <div className="fixed md:bottom-0 bottom-14 md:w-[75%] w-full z-50 text-white">
          <AudioPlayer />
        </div>
        <div className="fixed bottom-0 w-full z-50 text-white">
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default RightSide;
