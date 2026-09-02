import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    transaction:[{
        id:1,
        text:'title',
        amount:'200'
    }]
}

const transSlice = createSlice({
    name:'Tracker',
    initialState,
    reducers:{
        addTransaction:(state,action) => {
            const addtransaction = {
                id:nanoid(),
                text:action.payload.text,
                amount:action.payload.amount
            }
            state.transaction.push(addtransaction)
        },
        removeTransaction:(state,action) => {
            state.transaction = state.transaction.filter((items) => items.id !== action.payload)
            },

        updateTransaction:(state,action) => {
            state.transaction = state.transaction.map((items) => items.id === action.payload.id ? {...items,text:action.payload.text,amount:action.payload.amount} : items )
        }
    }

})

export const {addTransaction,removeTransaction,updateTransaction} = transSlice.actions

export default transSlice.reducer