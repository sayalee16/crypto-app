import { createSlice } from "@reduxjs/toolkit";
const AddInfoSlice = createSlice({
    name: 'addInfo',
    initialState:[],
    reducers:{
        addInfo: (state, action) => {
            return action.payload;
        }
    }
});
export const AddInfoActions = AddInfoSlice.actions;
export default AddInfoSlice;

