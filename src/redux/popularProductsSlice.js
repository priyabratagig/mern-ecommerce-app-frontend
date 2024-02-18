import { createSlice } from "@reduxjs/toolkit";
import popular_product_1 from "../assets/pictures/popular_product_1.png";
import popular_product_2 from "../assets/pictures/popular_product_2.png";
import popular_product_3 from "../assets/pictures/popular_product_3.avif";
import popular_product_4 from "../assets/pictures/popular_product_4.png";
import popular_product_5 from "../assets/pictures/popular_product_5.png";
import popular_product_6 from "../assets/pictures/popular_product_6.png";
import popular_product_7 from "../assets/pictures/popular_product_7.png";
import popular_product_8 from "../assets/pictures/popular_product_8.png";

const popularProductsSlice = createSlice({
    name: "popularProducts",
    initialState: [
        {
            id: 1,
            img: popular_product_1,
        },
        {
            id: 2,
            img: popular_product_2,
        },
        {
            id: 3,
            img: popular_product_3,
        },
        {
            id: 4,
            img: popular_product_4,
        },
        {
            id: 5,
            img: popular_product_5,
        },
        {
            id: 6,
            img: popular_product_6,
        },
        {
            id: 7,
            img: popular_product_7,
        },
        {
            id: 8,
            img: popular_product_8,
        },
    ],
})

export default popularProductsSlice.reducer