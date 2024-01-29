import { createSlice } from "@reduxjs/toolkit";

const MusicSlice = createSlice({
  name: "Music",
  initialState: {
    Music: {
      name: "Bekhayali",
      img: "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
      song: "https://aac.saavncdn.com/807/1ad57f8c99bc8c1623964b1b922e44f4_320.mp4",
      artist: "Sachet Tandon",
    },
  },
  reducers: {
    setMusic: (state, action) => {
      state.Music = action.payload;
    },
  },
});

export const { setMusic } = MusicSlice.actions;
export default MusicSlice.reducer;
