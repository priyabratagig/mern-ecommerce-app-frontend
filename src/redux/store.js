import { configureStore } from "@reduxjs/toolkit";
import slidesSlice from "./slidesSlice";
import categoriesSlice from "./categoriesSlice";
import popularProductsSlice from "./popularProductsSlice";

const store = configureStore({
    reducer: {
        slides: slidesSlice,
        categories: categoriesSlice,
        popularProducts: popularProductsSlice
    }
})

export default store
