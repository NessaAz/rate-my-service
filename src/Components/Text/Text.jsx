import React from "react";
import "./Text.css"

function Text({canvasObject, onClick}){
    const itemStyle = {...canvasObject.size, ...canvasObject.position}

    return (
        <div className="resize-drag yes-drop text-item" style={itemStyle} onClick={()=>onClick(canvasObject)}>
            <p style={canvasObject.contentStyle}>{canvasObject.content}</p>
        </div>
    )
}

export default Text;