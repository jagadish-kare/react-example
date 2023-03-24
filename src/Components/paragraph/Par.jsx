import React,{useState} from 'react'


const Par = (props) => {
    let{parag}=props

    let [state,setState]= useState(false)
    
        let changePara= ()=> {
             setState(!state)
          
        }
  return (
    <>

      <div>
                <p>{state ? parag :""}</p>
                <button onClick={changePara}>{state ?  "hide para" :"show para" }</button>
                
    </div>


    </>
  )
}

export default Par