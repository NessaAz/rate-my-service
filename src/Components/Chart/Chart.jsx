import React, {useEffect, useRef} from "react";
import "./Chart.css"
import createChart from "../../Utilities/Highcharts/CreateChart";

function Chart({canvasObject, onClick}){
    const figureRef = useRef()
    const resizableDraggableRef = useRef()
    const itemStyle = {...canvasObject.size, ...canvasObject.position, transform: `scale(${canvasObject.scale})`}

    useEffect(()=>{
        createChart(`${figureRef.current.id}`, canvasObject)
    }, [])

    function handleClick(canvasObject){
        const resizableDraggableElements = document.querySelectorAll(".resize-drag")
        resizableDraggableElements.forEach(element => {
            element.classList.remove("active")
        })

        resizableDraggableRef.current.classList.add("active")
        onClick(canvasObject)
    }

    return (
        <div ref={resizableDraggableRef} className="resize-drag yes-drop" onClick={()=>handleClick(canvasObject)} style={itemStyle}>
            <div className="chart-item" ref={figureRef} id={`chart-container-${canvasObject.id}`}></div>
            <p className="highcharts-description"></p>
        </div>
    )
}

export default Chart