import React from "react";
import "./Canvas.css"
import Text from "../Text/Text";
import Chart from "../Chart/Chart";

function Canvas({globalState, setGlobalState}){

    function updateActiveItem(canvasObject){
        setGlobalState(g => {
            return {...g, activeCanvasObject: canvasObject}
        })
    }

    return (
        <div id="canvas" className="dropzone drag-drop">
            {
                globalState.canvasObjects.map(canvasObject => {
                    if(canvasObject.type === "text"){
                        return <Text key={canvasObject.id} canvasObject={canvasObject} onClick={updateActiveItem}/>
                    }else if (canvasObject.type === "chart"){
                        return <Chart key={canvasObject.id} canvasObject={canvasObject} onClick={updateActiveItem} />
                    }
                })
            }
        </div>
    )
}

export default Canvas;