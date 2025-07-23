import { createSlice } from "@reduxjs/toolkit";
//intialstate create cheyali
const initialState = {
    count:0,
}
//counterslice variable we use for importing and exporting
export const counterslice=createSlice({
    name:'counter',//Creating a slice requires a string name to identify the slice
    initialState,
            //In Redux Toolkit (and Redux in general), state represents the current data your slice is managing.
           //When your reducer runs, Redux automatically passes:
            //state → the current value in the store for this slice
         // → the action dispatched (optional if not used)
    reducers:{

      increment:(state)=>{
        state.count+=1;
      },
      decrement:(state)=>{
       state.count-=1;
      },
    },
   
})
//actions also we have export
 export const { increment, decrement} = counterslice.actions

export default counterslice.reducer