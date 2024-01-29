import { createSlice } from "@reduxjs/toolkit";

const SongSlice = createSlice({
  name: "Song",
  initialState: { song: [] },
  reducers: {
    setSong: (state, action) => {
      state.song = action.payload;
    },
  },
});

export const { setSong } = SongSlice.actions;
export default SongSlice.reducer;
