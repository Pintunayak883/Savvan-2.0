import { configureStore } from "@reduxjs/toolkit";
import SongCardSlice from "./SongCardSlice";
import MusicCardSlice from "./MusicCardSlice";

const Store = configureStore({
  reducer: {
    Song: SongCardSlice,
    Music: MusicCardSlice,
  },
});

export default Store;
