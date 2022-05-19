import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    transaction: [
        { id: 1, text: 'salary', amount: +500 },
        { id: 2, text: 'Bonus', amount: +300 },
        { id: 3, text: 'Camera', amount: -100 },
        { id: 4, text: 'Flower', amount: -50 },
        { id: 5, text: 'Books', amount: -90 }
    ]
};

//create  context

export const GlobalContext = createContext(initialState);

//global provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    };

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
        
    };
    
    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}