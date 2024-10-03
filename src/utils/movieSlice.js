import { createSlice } from "@reduxjs/toolkit"


export const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailer:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload

        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
})

export const {addNowPlaying,addTrailer}=movieSlice.actions

export default movieSlice.reducer