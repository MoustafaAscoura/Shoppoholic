import { createSlice } from "@reduxjs/toolkit"; 

const Initial_State = {
    cartbody : {},
    max_items : 200
};

const cart = createSlice({
    name:'cart',
    initialState: Initial_State,
    reducers:{
        addToCart: (state, action) => {
            if (Object.keys(state.cartbody).length < state.max_items) {
                let obj = {...action.payload}
                obj.count = obj.count ? obj.count + 1 : 1
                state.cartbody[obj.id] = obj
            } else {
                alert("Cart is full! cannot add more items")
            }
        },

        removeItemFromCart: (state, action) => {
            if (state.cartbody[action.payload].count > 1){
                state.cartbody[action.payload].count -= 1
            } else {
                alert("Minimum quantity reached!")
            }
        },

        deleteAllFromCart: (state, action) => {
            delete state.cartbody[action.payload]
        }
    }
});

export const {addToCart,removeItemFromCart,deleteAllFromCart} = cart.actions;
export default cart.reducer;
