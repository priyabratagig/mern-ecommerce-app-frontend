import { createSlice } from "@reduxjs/toolkit";
import category_1 from '../assets/pictures/category_1.webp'
import category_2 from '../assets/pictures/category_2.jpeg'
import category_3 from '../assets/pictures/category_3.jpeg'


const categoriesSlice = createSlice({
    name: "categories",
    initialState: [
        {
            id: 1,
            img: category_1,
            title: "SHIRT STYLE!",
            cat: "women"
        },
        {
            id: 2,
            img: category_2,
            title: "LOUNGEWEAR LOVE",
            cat: "coat"
        },
        {
            id: 3,
            img: category_3,
            title: "LIGHT JACKETS",
            cat: "jeans"
        },
    ],
})

export default categoriesSlice.reducer