import { createSlice } from "@reduxjs/toolkit";
import slide_1 from '../assets/pictures/slide_1.png'
import slide_2 from '../assets/pictures/slide_2.png'
import slide_3 from '../assets/pictures/slide_3.png'

export const slidesSlice = createSlice({
    name: "slides",
    initialState: [
        {
            id: 1,
            img: slide_1,
            title: "SUMMER SALE",
            desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
            bg: "f5fafd",
        },
        {
            id: 2,
            img: slide_2,
            title: "AUTUMN COLLECTION",
            desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
            bg: "fcf1ed",
        },
        {
            id: 3,
            img: slide_3,
            title: "LOUNGEWEAR LOVE",
            desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
            bg: "fbf0f4",
        },
    ]
})

export default slidesSlice.reducer