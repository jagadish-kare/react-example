import React from 'react'
import Comp2 from './Compp2'

const Compp1 = (props) => {
    let name=props
  return (
    <div>
        <Comp2 name={name}/>
        Comp1
    </div>
  )
}

export default Compp1