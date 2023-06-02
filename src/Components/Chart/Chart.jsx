import React from "react";
import "./Chart.css"

function Chart({canvasObject, onClick}){
    return (
        <div className="resize-drag yes-drop" onClick={()=>onClick(canvasObject)}>
        </div>
    )
}

export default Chart