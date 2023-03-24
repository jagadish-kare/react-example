import React from "react";
import Tcard from "./Tcard"
import { tcardData } from "./tcardData";


function Jsp(){
    return(
        <>
            <h1 className="jsp-header">JSPIDERS</h1>
            <p className="jsp-content">
                jSPIDER is the world's ace software course training organization with 
                am aim to bridge the gap between the demand of industray and the curriculam
                of educational institution.
                <button className="jsp-btn">Join Jspiders</button>
            </p>

            <div className="card">
                {
                    tcardData.map(function(elems){
                        let {imgurl , cardtitle} = elems
                        return(<Tcard imgurl={imgurl} 
                            cardtitle={cardtitle}
                            />
                        )

                    })
                }
               
                
            </div>
        </>
    )
}
export default Jsp;