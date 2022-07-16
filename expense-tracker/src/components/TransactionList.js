import React,{useContext} from 'react'
import { GlobalContext } from './GlobalState'
import Transaction from './Transaction'

function TransactionList() {

  const {transactions} = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul id="list" className='list'>
          {transactions.map( transaction =>  <Transaction  transaction={transaction} key={transaction.id}/>   )}
            
        </ul>
    </>
  )
}

export default TransactionList