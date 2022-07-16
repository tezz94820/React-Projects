import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

function Balance() {

  const {transactions} = useContext(GlobalContext)

  //extracting amoounts in the form of array from transactions array
  const amounts = transactions.map( transaction => transaction.amount)
  const total = amounts.reduce( (acc,item)=> acc+=item ,0 )


  return (
    <>
      <h4>your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}

export default Balance