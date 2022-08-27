import { createSlice } from "@reduxjs/toolkit"

interface initialState {
    active:boolean
}
const initialState:initialState = {
    active:false
}

export const navSlices = createSlice({
    name:"nav",
    initialState,
    reducers:{
        toogleActive:(state)=>{
            state.active = !state.active
        }
    }
})

export const navReducer = navSlices.reducer 

export const {toogleActive} = navSlices.actions