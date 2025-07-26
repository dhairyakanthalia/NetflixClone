import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice(
    {
        name : 'gpt',
        initialState : true,
        reducers : {
            setGpt : (state, action) => {
                return action.payload;
            }
        }
    }
);

export const {setGpt} = gptSlice.actions;

export default gptSlice.reducer;