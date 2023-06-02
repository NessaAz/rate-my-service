import React from "react";
import "./Text.css"

function Text({data, onClick}){
    const itemStyle = {...data.size, ...data.position}

    return (
        <div className="resize-drag yes-drop text-item" style={itemStyle} onClick={()=>onClick(data)}>
            <p style={data.contentStyle}>{data.content}</p>
        </div>
    )
}

export default Text;