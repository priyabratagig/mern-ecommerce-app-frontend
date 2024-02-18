import { configureStore } from "@reduxjs/toolkit";
import slidesSlice from "./slidesSlice";
import categoriesSlice from "./categoriesSlice";

const store = configureStore({
    reducer: {
        slides: slidesSlice,
        categories: categoriesSlice
    }
})

export default store
