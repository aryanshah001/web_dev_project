import { configureStore } from "@reduxjs/toolkit";
import transReducer from './TransSlice'

const store = configureStore({
    reducer:transReducer
})

export default store