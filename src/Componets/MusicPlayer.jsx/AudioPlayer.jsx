import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { useSelector } from "react-redux";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const { name, img, song, artist } = useSelector((state) => state.Music.Music);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const trackStyle = {
    backgroundColor: "#1ECDB0",
  };

  return (
    <>
      <div className="bg-gray-800 min-w-[100%] min-h-[10vh]">
        <Slider
          min={0}
          max={duration}
          step={1}
          value={currentTime}
          onChange={handleSeek}
          trackStyle={trackStyle}
        />
        <div className="flex items-center justify-between mx-2">
          <div className="max-w-[200px] flex items-center justify-between mt-1">
            <img src={img} alt="" className="rounded-md w-[50px]" />
            <div className="flex-grow ml-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm">{artist}</p>
            </div>
          </div>
          <div className="flex items-center justify-center  mx-0 px-0 ">
            <audio
              ref={audioRef}
              src={song}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
            <FaStepBackward size={20} className="mr-2" />
            <button
              onClick={handlePlayPause}
              className="mx-5 focus:outline-none text-black bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full"
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>
            <FaStepForward size={20} />
          </div>
          <div className="max-w-[100%] flex items-center justify-center ">
            <p>
              {formatTime(currentTime)}/{formatTime(duration)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
