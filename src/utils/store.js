// @reduxjs/toolkit is core redux library used to maintain store
// react-redux is used to connect redux with react acts as bridge between react and redux

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;