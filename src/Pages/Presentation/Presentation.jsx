import React from "react";
import Canvas from "../../Components/Canvas/Canvas";
import ObjectActions from "./Components/ObjectActions/ObjectActions";
import "./Presentation.css"

function Presentation({globalState, setGlobalState}){
    return (
        <div id="presentation-page">
            <ObjectActions globalState={globalState} />
            <Canvas globalState={globalState} setGlobalState={setGlobalState} />
        </div>
    )
}

export default Presentation;