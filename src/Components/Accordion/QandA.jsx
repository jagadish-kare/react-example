import React from 'react'
import QA from './QA'
import { qadata } from './qadata'

const QandA = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Queations ans answers displayed</h1>
    <div>
    {
        qadata.map((elem) =>{
            let {question,ans}=elem
            return(
                <QA question={question} ans={ans} />
            )
        }

        )
    }
    </div>
    </>
  )
}

export default QandA