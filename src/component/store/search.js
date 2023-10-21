import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:"search",
    initialState:{value :{type:true,result:[]}},
    reducers:{
        setAcademic:(state,action)=>{
            state.value.type=action.payload;
        },
        onSearch:(state, action)=>{
            state.value.result=action.payload;
        },
        cancleSearch:(state)=>{
            state.value.result=[];
        }
    }

})
export const {setAcademic,onSearch,cancleSearch} = searchSlice.actions;
export default searchSlice.reducer