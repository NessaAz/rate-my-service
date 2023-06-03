import React from "react";
import "./Button.css"

function Button({action, onClick, className}){
    return (
        <button className={className} onClick={onClick}>{action}</button>
    )
}

export default Button;