import React from "react";
import Canvas from "../../Components/Canvas/Canvas";
import "./Presentation.css"

function Presentation({canvasData, setCanvasData}){
    return (
        <div id="presentation-page">
            <Canvas canvasData={canvasData} setCanvasData={setCanvasData} />
        </div>
    )
}

export default Presentation;