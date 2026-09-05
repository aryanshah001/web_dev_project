import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    transaction:[
      
]
}

const transSlice = createSlice({
    name:'Tracker',
    initialState,
    reducers:{
        addTransaction:(state,action) => {
            const addtransaction = {
                id:nanoid(),
                text:action.payload.text,
                amount:action.payload.amount,
                type:action.payload.type,
                category:action.payload.category,
                date:new Date().toISOString()
            }
            state.transaction.push(addtransaction)
        },
        removeTransaction:(state,action) => {
            state.transaction = state.transaction.filter((items) => items.id !== action.payload)
            },

        updateTransaction:(state,action) => {
            state.transaction = state.transaction.map((items) => items.id === action.payload.id ? {
                ...items,
                text:action.payload.text,
                amount:action.payload.amount,
                type:action.payload.type,
                category:action.payload.category
            } : items )
        },
        loadTransaction:(state,action) => {
            state.transaction = action.payload
        }
    }

})

export const {addTransaction,removeTransaction,updateTransaction,loadTransaction} = transSlice.actions

export default transSlice.reducer