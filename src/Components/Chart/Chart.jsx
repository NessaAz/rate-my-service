import React from "react";
import "./Chart.css"

function Chart({data, onClick}){
    return (
        <div onClick={()=>onClick(data)}>
        </div>
    )
}

export default Chart


Linegraph