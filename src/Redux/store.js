import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/user";


const store=configureStore({
    reducer:{
        user:userReducer,
    }
})

export default store;