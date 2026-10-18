import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    products:[]
}

const prodSlice = createSlice({
    name:'e-commerce',
    initialState,
    reducers:{
        addProducts:(state , action) => {
            const addProduct = {
                id:nanoid(),
                name:action.payload.name,
                price:action.payload.price,
                details:action.payload.details,
                image:action.payload.image,
                stock:action.payload.stock,
                category:action.payload.category
            }
            state.products.push(addProduct)
        },
        removeProducts:(state , action) => {
            state.products = state.products.filter((items) =>items.id !== action.payload)
        },
        updateProducts:(state , action) => {
            state.products = state.products.map((items) => items.id === action.payload.id ? ({
               ...items,
               name:action.payload.name,
                price:action.payload.price,
                details:action.payload.details,
                image:action.payload.image,
                stock:action.payload.stock,
                category:action.payload.category
            }) : items)
        }
    }

})

export const {addProducts,removeProducts,updateProducts} = prodSlice.actions

export default prodSlice.reducer