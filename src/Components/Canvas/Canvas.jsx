import React from "react";
import "./Canvas.css"
import Text from "../Text/Text";

function Canvas({canvasData, setCanvasData}){
    return (
        <div id="canvas" className="dropzone drag-drop">
            {
                canvasData.map(data => {
                    if(data.type === "text"){
                        return <Text data={data} />
                    }else if (data.type === "chart"){
                        return <Chart data={data} />
                    }
                })
            }
        </div>
    )
}

export default Canvas;