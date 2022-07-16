import React from 'react'

function Form( {inputText , setInputText , todos , setTodos , setStatus} ) {
    const inputTextHandler = event => {
        // console.log(event.target.value)
        setInputText(event.target.value)
    }
    const submitToDoHandler = event => {
        event.preventDefault()
        setTodos([
            ...todos , {text : inputText , completed : false , id:Math.random()*1000 }
        ])
        setInputText('')
    }

    const statusHandler = (event) => {
        setStatus(event.target.value)
    }

  return (
    <form onSubmit={submitToDoHandler}>
        <input type="text" className='todo-input' value={inputText} onChange={inputTextHandler} required/>
        <button className='todo-button' type='submit'>
            <i className='fas fa-plus-square'/>
        </button>
        <div className='select'>
            <select name='todos' className='filter-todo' onChange={statusHandler}>
                <option value='all'>All</option>
                <option value='completed'>completed</option>
                <option value='uncompleted'>uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form