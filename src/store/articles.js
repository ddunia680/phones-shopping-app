import { createSlice } from '@reduxjs/toolkit';

import prod1 from './images/product-1.png';
import prod2 from './images/product-2.png';
import prod3 from './images/product-3.png';
import prod4 from './images/product-4.png';
import prod5 from './images/product-5.png';
import prod6 from './images/product-6.png';
import prod7 from './images/product-7.png';
import prod8 from './images/product-8.png';


const articles = createSlice({
    name: 'Articles',
    initialState: {
        articles: [
            {image: prod1, name: 'Google Pixel - Black', price: 10, id: 100},
            {image: prod2, name: 'Samsung S7', price: 16, id: 101},
            {image: prod3, name: 'HTC 10 - Black', price: 8, id: 102},
            {image: prod4, name: 'HTC 10 - White', price: 18, id: 103},
            {image: prod5, name: 'HTC 10 - Red', price: 16, id: 104},
            {image: prod6, name: 'IPhone 4 - Black', price: 22, id: 105},
            {image: prod7, name: 'IPhone 5s - Black', price: 30, id: 106},
            {image: prod8, name: 'IPhone 6 - White', price: 35, id: 107}
        ]
    },

    reducers: {

    }

});

export default articles.reducer;