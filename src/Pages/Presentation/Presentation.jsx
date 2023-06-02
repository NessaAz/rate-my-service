import React from "react";
import Canvas from "../../Components/Canvas/Canvas";
import "./Presentation.css"

function Presentation({canvasData, setCanvasData}){
    return (
        <Canvas canvasData={canvasData} setCanvasData={setCanvasData} />
    )
}

export default Presentation;