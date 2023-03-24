import React from 'react'
import { useState } from 'react'

const GetFeildsVal = () => {
    let[state,setState] = useState({fname:'PSR',emailid:"chinni@gmail.com",mobile:8008458293})
    let getVal = (event) =>{
        let val=event.target.value
        let name=event.target.name
        setState((preVal)=>{
            console.log(preVal);
            if(name==="fullname"){
                return{
                    fname : val ,
                emailid :preVal.emailid ,
                mobile : preVal.mobile
                }
            }
            else if(name==="emailid"){
                 return{
                    fname:preVal.fname ,
                emailid:val ,
                mobile:preVal.mobile
                 }
            }
            else if(name==="mobile"){
                return{
                    fname:preVal.fname ,
                    emailid:preVal.emailid ,
                        mobile:val
                }
            }

        })

        

    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}> fullname  is:{state.fname}</h1>
        <h1 style={{textAlign:"center"}}>EmailId is:{state.emailid}</h1>
        <h1 style={{textAlign:"center"}}>mobile is:{state.mobile}</h1>
        <form className='form2'>
                <input onChange={getVal} type="text" name="fullname" placeholder='Enter fullname' />
                <input onChange={getVal} type="email"  name="emailid" placeholder='Enter emailId' />
                <input onChange={getVal} type="tel"   name="mobile" placeholder='Enter mobule'/>
                <button className='btnn'>submit</button>
        </form>
    </div>
  )
}

export default GetFeildsVal