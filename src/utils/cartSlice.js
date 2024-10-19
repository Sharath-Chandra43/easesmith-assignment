import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        selectedProductId: null,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        openAddToCartModal: (state, action) => {
            state.selectedProductId = action.payload; // Set selected product ID
          },
    }
})

export const {addItem,openAddToCartModal}=cartSlice.actions;
export default cartSlice.reducer;