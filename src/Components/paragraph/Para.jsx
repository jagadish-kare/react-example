import React from 'react'
import Par from './Par'
import {paradata} from './paradata'

const Para = () => {
  return (
        <>
        <div>
            {
                paradata.map(function(elems){
                    let {parag} = elems
                    return <Par parag={parag}/>                      
                })
            }
        </div>
        
        </>
   
  )
}

export default Para