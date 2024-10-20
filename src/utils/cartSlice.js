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
        setSelectedProductId: (state, action) => {
            state.selectedProductId = action.payload; // Set selected product ID
          },
    }
})

export const {addItem,setSelectedProductId}=cartSlice.actions;
export default cartSlice.reducer;