import { createContext, useReducer } from "react"
import AppReducer from './AppReducer'
import React from 'react'

//initial state
const initialState = {
    transactions : [                                     //transaction is an array and id are stored in the individual objects
        { id:1 , text:'flower' , amount:-20},
        { id:2 , text:'salary ' , amount:300},
        { id:3 , text:'book' , amount:-10},
        { id:4 , text:'camera' , amount:150},
    ]
}

export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({children})=> {
    //making a usereducer hook
    const [state , dispatch] = useReducer(AppReducer , initialState)
    
    //actions
    const deleteTransaction = id => {
        dispatch({
            type:'DELETE_TRANSACTION' ,
            payload:id
        })
    }
    
    const addTransaction = transaction => {
        dispatch({
            type:'ADD_TRANSACTION' ,
            payload:transaction
        })
    }
    return( <GlobalContext.Provider value={{
        transactions : state.transactions ,
        deleteTransaction,
        addTransaction
        }}>
        {children}
        console.log(initialState.transactions)
        </GlobalContext.Provider>
    
    )
}