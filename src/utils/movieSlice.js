import { createSlice } from "@reduxjs/toolkit"


export const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailer:null,
        popular:null,
        topRated:null,
        
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload

        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        addPopular:(state,action)=>{
            state.popular = action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        }
    }
})

export const {addNowPlaying,addTrailer,addPopular,addTopRated}=movieSlice.actions

export default movieSlice.reducer