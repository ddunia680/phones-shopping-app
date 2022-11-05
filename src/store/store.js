import { configureStore } from "@reduxjs/toolkit";
import articles from "./articles";
import cart from "./cart";

const store = configureStore({
    reducer: {
        articles: articles,
        cart: cart
    }
    
});

export default store;