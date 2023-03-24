import React from 'react'
import { useState } from 'react'

const GetFelidValues = () => {
    let [state,setState]=useState("")
    let [state2,setState2]=useState("")
    let [state3,setState3]=useState("")
    let [state4,setState4]=useState("")
    let handleChange=(event)=>{
        let fval= event.target.value
            setState(fval)
            
    }
    let mailId=(event)=>{
        let eval2 = event.target.value
          
            setState2(eval2)
    }
    let pass=(event)=>{
      let pval = event.target.value
         
          setState3(pval)
  }
  let pass2=(event)=>{
    let pval = event.target.value
       
        setState4(pval)
}
  
  return (
    <div className='form'> 
        <h1 style={{textAlign:"center"}}>User name is:{state}</h1>
        <input onChange={handleChange} type="text" placeholder='Enter U r fullname' /><br /><br />
        <h1 style={{textAlign:"center"}}>User email is:{state2}</h1>
        <input onChange={mailId} type="email" placeholder='Enter U r emailId' />
        <h1 style={{textAlign:"center"}}>User password is:{state3}</h1>
        <input onChange={pass} type="password" placeholder='Enter U r password' />
        <h1 style={{textAlign:"center"}}>User phone no is:{state4}</h1>
        <input onChange={pass2} type="tel" placeholder='Enter U r mobile no:' />
    </div>
  )
}

export default GetFelidValues