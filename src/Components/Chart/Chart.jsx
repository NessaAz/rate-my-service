import React from "react";
import "./Chart.css"

function Chart({data, onClick}){
    return (
        <div className="resize-drag yes-drop" onClick={()=>onClick(data)}>
        </div>
    )
}

export default Chart


Linegraph