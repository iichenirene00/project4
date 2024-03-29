import fix from "./fixSlice";
import sign from "./signSlice";
import row1 from "./row1Slice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    row1: row1,
    fix: fix,
    sign: sign,
  },
});
