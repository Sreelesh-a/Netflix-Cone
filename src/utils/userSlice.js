import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    aiSuggestions: null,
    AiMovieSuggestions: [],
    movieDetails: null,
    recommendMovies:null
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
    getAiSuggestions: (state, action) => {
      state.aiSuggestions = action.payload;
    },
    getAiMovieSuggestions: (state, action) => {
      // if(!Array.isArray(state.AiMovieSuggestions)){
      //     state.AiMovieSuggestions=[]
      // }
      const newMovie = action.payload;

      const movieExists = state.AiMovieSuggestions.some(
        (existingMovie) => existingMovie.id === newMovie.id
      );
      if (!movieExists) {
        state.AiMovieSuggestions.push(newMovie);
      }
    },
    removeExistingSuggestions: (state) => {
      state.AiMovieSuggestions = [];
    },
    addMovieSubDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    getRecommendMovies:(state,action)=>{
        state.recommendMovies=action.payload
    }
  },
});

export const {
  addUser,
  removeUser,
  getAiSuggestions,
  getAiMovieSuggestions,
  removeExistingSuggestions,
  addMovieSubDetails,
  getRecommendMovies
} = userSlice.actions;
export default userSlice.reducer;
