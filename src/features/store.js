import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/ContactPSlice";

const store = configureStore({
    reducer : {
        contacts : contactReducer

    }
})

export default store