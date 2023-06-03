import React, {useEffect, useRef} from "react";
import "./Chart.css"
import createChart from "../../Utilities/Highcharts/CreateChart";

function Chart({canvasObject, onClick}){
    const figureRef = useRef()
    const itemStyle = {...canvasObject.size, ...canvasObject.position}

    useEffect(()=>{
        createChart(`${figureRef.current.id}`, canvasObject)
    }, [])

    return (
        <div className="resize-drag yes-drop" onClick={()=>onClick(canvasObject)} style={itemStyle}>
            <div className="chart-item" ref={figureRef} id={`chart-container-${canvasObject.id}`}></div>
            <p className="highcharts-description"></p>
        </div>
    )
}

export default Chart