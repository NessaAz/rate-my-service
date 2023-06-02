import React, {useEffect, useRef} from "react";
import "./Chart.css"
import createChart from "../../Utilities/Highcharts/CreateChart";

function Chart({canvasObject, onClick}){
    const figureRef = useRef()

    useEffect(()=>{
        createChart(`${figureRef.current.id}`, canvasObject)
    }, [])

    return (
        <div className="resize-drag yes-drop" onClick={()=>onClick(canvasObject)}>
            <figure class="highcharts-figure">
                <div ref={figureRef} id={`chart-container-${canvasObject.id}`}></div>
                <p className="highcharts-description"></p>
            </figure>
        </div>
    )
}

export default Chart