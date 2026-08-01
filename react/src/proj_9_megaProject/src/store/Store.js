import {configureStore} from '@reduxjs/toolkit'
import authReducer from './AuthSlice'

 const Store = configureStore({
    reducer:authReducer
})

export default Store