import { configureStore } from "@reduxjs/toolkit";
import prodSlice from './prodSlice'
import authSlice from './authSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        products:prodSlice,
        auth:authSlice,
        cart:cartSlice
    }
})

export default  store
