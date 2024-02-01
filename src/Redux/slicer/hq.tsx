import HQs from "@/ReduxLists/HqList";
import { createSlice } from "@reduxjs/toolkit";

const hqs = createSlice({
  name: "hqs",
  initialState: {
    hqs: HQs,
  },
  reducers: {},
});

export default hqs.reducer;
