import { createSlice } from "@reduxjs/toolkit";

const loadSlice= createSlice({
    name:"load",
    initialState:{value :{isloading:false,error:null}},
    reducers:{
        setloading:(state,action)=>{
            state.value.isloading=action.payload;
        },
        catchError:(state, action)=>{
            state.value.error=action.payload;
        },
        
    }

})
export const {setloading, catchError} = loadSlice.actions;
export default loadSlice.reducer