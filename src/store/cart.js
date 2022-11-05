import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: 'Cart elements',
    initialState: {
        cart: [],
        totalPrice: 0,
        cartVisible: false
    },

    reducers: {
        ADDITEM: (state, action) => {
            state.cart.push(action.payload);
            state.totalPrice += action.payload.price;
        },

        DELETEITEM: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload.id);
            state.totalPrice -= action.payload.price;
            // console.log(action.payload);
        },

        DELETESINGLEEL: (state, action) => {
            state.cart.shift(el => el.id === action.payload.id);
            state.totalPrice -= action.payload.price;
        },

        CLEARITEMS: (state, action) => {
            state.cart = [];
            state.totalPrice = 0;
        },
        SETCARTVISIBILITY: (state, action) => {
            state.cartVisible = action.payload
        }
    }
});

export const { ADDITEM, DELETEITEM, CLEARITEMS, DELETESINGLEEL, SETCARTVISIBILITY } = Cart.actions;
export default Cart.reducer;