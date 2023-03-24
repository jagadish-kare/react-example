import React from 'react'
import { useState } from 'react'

const StateExample = () => {
    let [jsp,setJsp]=useState("jsipders")
    let[num,setNum]=useState(0)
    let[bool,setBool]=useState(true)
    console.log("component re-render on the web page")
    // function to change name omn the click
    function changeName(){
        setJsp("Kumar spiders")
    }
    //function to increment the number
    function handleClick(){
        setNum(num+10)
    }
    //function to change the text in  button
    function ch(){
        setBool(!bool)
    }
  
  
    return (

    <>
    <div>
        <button onClick={ch}>{bool ? "click" :"clicked"}</button>

        <h1>My nam is {jsp}</h1>
        <button onClick={changeName}>changeName</button>
    </div>
    <div>
        <h1>{num}</h1>
        <button  onClick={handleClick}>increament</button>
    </div>

    </>
  )
}

export default StateExample
