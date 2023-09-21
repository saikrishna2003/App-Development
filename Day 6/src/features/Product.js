// import {createSlice} from '@reduxjs/toolkit'  //to create particular state


// export const productSrlice = createSlice({
//     name: 'product',
//     initialState:{value:{id:'1',name:'name',description:'des',category:'furniture'}},
    

//     reducers:{  
//         addProduct: (state,action) => {  
//             state.value = action.payload
//         },
//         remove:(state) => {
//             state.value =   {id:'', name:'', description:'', category:''}
//         }
//     }
// })
// export const {addProduct,remove} = productSrlice.actions;
// export default productSrlice.reducer; 

import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: [
            { id: '1', name: 'name1', description: 'des1', category: 'book1' },
            // Add more initial data here if needed
        ],
    },

    reducers: {
        addProduct: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeALl: (state) => {
            state.value = [];
        },
      
        removeProduct: (state, action) => {
            state.value = state.value.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            const updatedProducts = state.value.map(product => 
                product.id === action.payload.id ? { ...product, ...action.payload.changes } : product
            );
            state.value = updatedProducts;
        },
    },
});

export const { addProduct, removeALl,removeProduct,editProduct } = productSlice.actions;
export default productSlice.reducer;
