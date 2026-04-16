import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name:"user",
    initialState: {
        name:"",
        email:"",
    },
    reducers : {
        setName : (state,action) => {
            state.name = action.payload;
        },
        setEmail : (state,action) => {
            state.email = action.payload;
        }

    }
});

export const {setName,setEmail} = userInfo.actions;
export default userInfo.reducer;