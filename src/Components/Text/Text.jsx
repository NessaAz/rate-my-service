import React, {useRef} from "react";
import "./Text.css"

function Text({canvasObject, onClick}){
    const resizableDraggableRef = useRef()
    const itemStyle = {...canvasObject.size, ...canvasObject.position, transform: `scale(${canvasObject.scale})`}

    function handleClick(canvasObject){
        const resizableDraggableElements = document.querySelectorAll(".resize-drag")
        resizableDraggableElements.forEach(element => {
            element.classList.remove("active")
        })

        resizableDraggableRef.current.classList.add("active")
        onClick(canvasObject)
    }

    return (
        <div ref={resizableDraggableRef} className="resize-drag yes-drop" style={itemStyle} onClick={()=>handleClick(canvasObject)}>
            <p className="text-item" style={canvasObject.contentStyle}>{canvasObject.content}</p>
        </div>
    )
}

export default Text;