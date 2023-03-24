import React from "react";

import { Routes,Route } from "react-router-dom";
import QandA from "./Components/Accordion/QandA";
import Comp1 from "./Components/Forms/Comp1";
import Comp2 from "./Components/Forms/Comp2";
import GetFeildsVal from "./Components/Forms/GetFeildsVal";
import GetFelidValues from "./Components/Forms/GetFelidValues";
import Navbar from "./Components/Forms/Navbar";
import Home from "./Components/Home";
import Jsp from "./Components/Jsp-Cards/Jsp";
import Navbar2 from "./Components/navbar/Navbar2";
import Para from "./Components/paragraph/Para";
import Compp1 from "./Components/Props-Drilling-Ecx/Compp1";
import StateExample from "./Components/States/StateExample";
import Todo from "./Components/Todo-App/Todo";

const App = () => {
  return (
    <>
    <Navbar2/>
    
       <Routes>
         <Route path="/" element={<Home/>} />
            <Route path="/Todo-app" element={<Todo/>} />
            <Route path="/Forms"  element={
                <>
                <Comp1/>
                <Comp2/>
                <GetFelidValues/>
                <GetFeildsVal/>
                <Navbar/>
                </>

            } />

            <Route path="/Jsp-cards" element={ <Jsp/>}/>
            <Route path="/Accordion" element={<QandA/>}/>
            <Route path="/States" element={<StateExample/>}/>
            <Route path="/para"  element={<Para />} />
            <Route path="/Compp1"  element={<Compp1 />} />
        
        </Routes> 
    </>
    
  )
}

export default App