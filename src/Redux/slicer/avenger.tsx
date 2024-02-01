import Avengers from "@/ReduxLists/AvengerList";
import { createSlice } from "@reduxjs/toolkit";

const avengers = createSlice({
  name: "avengers",
  initialState: {
    avengers: Avengers,
  },
  reducers: {},
});

export default avengers.reducer;
