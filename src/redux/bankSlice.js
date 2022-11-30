import { createSlice } from '@reduxjs/toolkit'
import { createContext } from "react";
import { createSelectorHook, createDispatchHook } from "react-redux";

const initialState = {
    balance: 0,
}

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.balance = state.balance + action.payload 
        },
        withdraw: (state, action) => {
            state.balance = state.balance - action.payload 
        },
    }
})

export const bankContext = createContext({});

export const useBankStoreDispatch = createDispatchHook(bankContext);
export const useBankStoreSelector = createSelectorHook(bankContext);

export const { deposit, withdraw } = bankSlice.actions
export default bankSlice.reducer