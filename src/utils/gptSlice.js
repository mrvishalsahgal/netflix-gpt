import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptView: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.isGptView = !state.isGptView;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
