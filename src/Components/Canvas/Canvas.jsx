import React from "react";
import "./Canvas.css"
import Text from "../Text/Text";

function Canvas({globalState, setGlobalState}){

    function updateActiveItem(data){
        setGlobalState(g => {
            return {...g, activeCanvasItem: data}
        })
    }

    return (
        <div id="canvas" className="dropzone drag-drop">
            {
                globalState.data.map(data => {
                    if(data.type === "text"){
                        return <Text key={data.id} data={data} onClick={updateActiveItem}/>
                    }else if (data.type === "chart"){
                        return <Chart key={data.id} data={data} onClick={updateActiveItem} />
                    }
                })
            }
        </div>
    )
}

export default Canvas;