import React from "react";
import "./Text.css"

function Text({canvasObject, onClick}){
    const itemStyle = {...canvasObject.size, ...canvasObject.position}

    return (
        <div className="resize-drag yes-drop" style={itemStyle} onClick={()=>onClick(canvasObject)}>
            <p className="text-item" style={canvasObject.contentStyle}>{canvasObject.content}</p>
        </div>
    )
}

export default Text;