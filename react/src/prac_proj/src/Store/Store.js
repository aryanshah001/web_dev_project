import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../TodoSlice/TodoSlice'

export const Store = configureStore({
    reducer:TodoReducer
})