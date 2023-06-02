import React from "react";
import "./Text.css"

function Text({data}){
    return (
        <div className="resize-drag yes-drop">
            <div id="">
                {data.content}
            </div>
        </div>
    )
}

export default Text;