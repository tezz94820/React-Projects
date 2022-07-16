import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalState'


function AddTransaction() {

    const {addTransaction} = useContext(GlobalContext)

    //local states
    const [text , setText] = useState('')
    const [amount , setAmount] = useState(0)

    const submitHandler = e => {
        e.preventDefault()
        const newTransaction = {
            id : Math.floor(Math.random()*10000000000),
            text,
            amount : +amount                //we are parsing our the amount as the amount is string and +amount converts it to number 
        }
        addTransaction(newTransaction)
    }

  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type="text" id="text" placeholder="Enter text ...." value={text} onChange={ event => setText(event.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amout <br /> (Negative - Expense , Positive - Income)</label>
                <input type='number' placeholder="Enter Amount ..." value={amount} onChange={event => setAmount(event.target.value)}/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction