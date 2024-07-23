import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated : false
}

const authSlicer =createSlice({

    name:'isAuthenticated',
    initialState : initialState,
    reducers : {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }

}) ;
export const authAction = authSlicer.actions;
export default authSlicer.reducer;