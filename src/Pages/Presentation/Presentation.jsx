import React from "react";
import Canvas from "../../Components/Canvas/Canvas";
import "./Presentation.css"
import Navbar from "../../Components/Navbar/Navbar";

function Presentation({globalState, setGlobalState}){
    return (
        <div id="presentation-page">
            <Navbar />
            <Canvas globalState={globalState} setGlobalState={setGlobalState} />
        </div>
    )
}

export default Presentation;