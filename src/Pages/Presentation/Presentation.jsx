import React from "react";
import "./Presentation.css"
import Canvas from "../../Components/Canvas/Canvas";
import ObjectActions from "./Components/ObjectActions/ObjectActions";
import ObjectEditor from "./Components/ObjectEditor/ObjectEditor";

function Presentation({globalState, setGlobalState}){
    return (
        <div id="presentation-page">
            <ObjectEditor />
            <div id="presentation-container">
                <ObjectActions globalState={globalState} />
                <Canvas globalState={globalState} setGlobalState={setGlobalState} />
            </div>
        </div>
    )
}

export default Presentation;