import React from 'react'
import { useState } from 'react'
import Todoitem from './Todoitem'

const Todo = () => {
    let[state,setState]=useState([])
    let[state2,setState2]=useState("")
    let[edit,setEdit]=useState(true)

    let getVal= (event)=>{
    let val= event.target.todolist.value
        setState((preVal)=>{
            return[...preVal,val]
          })
          setState2("")
        event.preventDefault();// stops reloading the page:

    }
    let handleInput = (event)=> {
        let fval=event.target.value
        setState2(fval)
    }
  return (
   <>
        <form className='form5' onSubmit={getVal}>
                    <input onChange={handleInput} value={state2}  type="text" name='todolist' placeholder='Enter a todo'/>
                    <button className='button2'>{edit ? "Add todo" : "Edit todo"}</button>
        </form>
        <div>
            <h1 className='divi' style={{textAlign:"center", listStyleType:"none"}}>
                {
                    state.map((elem,i) => {
                        return <Todoitem
                        state2={state2}
                        setEdit={setEdit}
                        edit={edit}
                        setState2={setState2}
                        setState={setState}
                         index={i} 
                         elem={elem} />
                        
                       
                    
                    })
                   
                }
                
            </h1>
        </div>


   </>
  )
}

export default Todo