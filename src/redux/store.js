import { configureStore } from "@reduxjs/toolkit";
import slidesSlice from "./slidesSlice";

const store = configureStore({
    reducer: {
        slides: slidesSlice
    }
})

export default store
