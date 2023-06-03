import React from "react";
import Button from "../../Elements/Button/Button";
import "./CanvasObjectOptions.css"

function CanvasObjectOptions({onClick}){
    return (
        <ul className="canvas-object-options">
            <li>
                <Button action="delete" onClick={onClick} />
            </li>
            <li>
                <Button action="edit" onClick={onClick} />
            </li>
        </ul>
    )
}

export default CanvasObjectOptions;