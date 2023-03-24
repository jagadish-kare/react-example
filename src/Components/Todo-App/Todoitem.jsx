import React from 'react'

const Todoitem = (props) => {
    let { setState,index,elem,state2,setState2,edit,setEdit,}=props
    let handleClick = (i)=>{
      return setState((preVal) =>{
        return preVal.filter((elem,id) => {
          return i != id 
        })
      })
    }
    let handleEdit=()=> {
      setEdit(!edit)
    }
  return (
    <div className='list'>
        <li>{index+1}.  {elem}</li>
         <button onClick={()=> handleClick(index)} className='btnnn'>DELETE</button>
         <button onClick={handleEdit} className='btnnn2'>Edit</button>
    </div>
  )
}

export default Todoitem