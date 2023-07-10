import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", //name of the slice
    initialState: { // initial state of the slice
        items: []
    },
    reducers: { // reducers are used to modify/update the state of the slice
        addItem: (state, action) => { // 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;

/**
 * cartSlice = {
 *      actions: {
 *          addItem,
 *         removeItem,  
 *        clearCart
 *      },
 *     reducer: reducers
 * }
 */