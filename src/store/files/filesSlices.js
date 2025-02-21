import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const filesSlices = createSlice({
  name: "files",
  initialState: {
    fileslist: [],
    imglist: [],
    reset: true,
  },
  reducers: {
    addfiles(state, action) {
      return produce(state, (draft) => {
        // console.log("addfiles");
        draft.fileslist = [...action.payload];
      });
    },
    addimg(state, action) {
      return produce(state, (draft) => {
        draft.imglist = [...action.payload];
      });
    },
    resetaction(state, action) {
      return produce(state, (draf) => {
        // console.log("resetaction");
        draf.reset = !draf.reset;
      });
    },
  },
});

export const { addfiles, addimg, resetaction } = filesSlices.actions;

export default filesSlices.reducer;
