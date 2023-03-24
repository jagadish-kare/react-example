import React from "react";

function Tcard(props){
    let {imgurl,cardtitle}=props
    return(
        <div className="tr-card">
                <img src={imgurl} alt="" />
                <h1 className="tr-name">{cardtitle}</h1>
        </div>
    )
}
export default Tcard;