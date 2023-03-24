import React from 'react'
import { useState } from 'react'

const QA = (props) => {
    let {question,ans}=props
    let [state,setState]= useState(false)
    let [state2,setState2]=useState(false)
  
    let change=  () =>{

        setState(!state);
        setState2(!state2)
    
   }
  return (
    <>
     <div className="ques-block">
     <p className="ques">{question}  <button onClick={change} className="btn" >{state2 ? "-" : "+"}</button></p>
      <p className="answers">{state ? ans : " "}</p>
     </div>
    </>
  )
}

export default QA