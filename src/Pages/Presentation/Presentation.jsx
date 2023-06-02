import React from "react";
import Canvas from "../../Components/Canvas/Canvas";
import "./Presentation.css"

function Presentation({globalState, setGlobalState}){
    return (
        <div id="presentation-page">
            <Canvas globalState={globalState} setGlobalState={setGlobalState} />
        </div>
    )
}

export default Presentation;