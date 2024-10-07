import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState:{counterVal:0},
    reducers:{
        increment: (state) => {
            // console.log(state,action);
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        subtract: (state,action) => {
           state.counterVal -= action.payload.value;
        },
        add : (state,action) => {
           state.counterVal += action.payload
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;