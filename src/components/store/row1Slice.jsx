import { createSlice } from "@reduxjs/toolkit";

export const row1Slice = createSlice({
  name: "row1",
  initialState: {
    row1c1: "",
    row2c1: "",
    loading1: true,
    loading2: true,
  },

  reducers: {
    r1c1: (state, action) => {
      state.row1c1 = action.payload;
    },
    r2c1: (state, action) => {
      state.row2c1 = action.payload;
    },
    loaded1: (state) => {
      state.loading1 = false;
    },
    loaded2: (state) => {
      state.loading2 = false;
    },
  },
});
export const { r1c1, r2c1, loaded1, loaded2 } = row1Slice.actions;
export default row1Slice.reducer;
