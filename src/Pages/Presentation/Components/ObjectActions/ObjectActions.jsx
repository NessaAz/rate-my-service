import React from "react";
import "./ObjectActions.css"

function ObjectActions({globalState}){
    const activeObject = globalState.activeCanvasObject

    return (
        <div id="object-actions">
            <ul className="objects">
                <li className="text-objects">
                    <h2>Texts</h2>
                    <ul>
                        {
                            globalState.canvasObjects
                            .filter(obj => obj.type === 'text')
                            .map(obj => {
                                return (
                                    <li className={obj.id === activeObject.id? "active": ""}>{obj.name}</li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="chart-objects">
                    <h2>Charts</h2>
                    <ul>
                        {
                            globalState.canvasObjects
                            .filter(obj => obj.type === 'chart')
                            .map(obj => {
                                return (
                                    <li className={obj.id === activeObject.id? "active": ""}>{obj.name}</li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ObjectActions;