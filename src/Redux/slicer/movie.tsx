import Movies from "@/ReduxLists/MovieList";
import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: Movies,
  },
  reducers: {},
});

export default movies.reducer;
