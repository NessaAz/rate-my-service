import React, {useEffect, useState} from 'react'
import './App.css'
import makeResizableAndDraggable from './Utilities/Interact/resizableDraggable'
import dropZone from './Utilities/Interact/dropzone'
import canvasObjects from './Utilities/Data/canvasObjects'
import Presentation from './Pages/Presentation/Presentation'

function App() {
  const [globalState, setGlobalState] = useState({canvasObject: canvasObjects, activeCanvasObject: {}})

  useEffect(()=>{
    // These functions accept css selectors and give them interactive 
    // properties e.g; draggable, resizable, dropzone, etc.
    makeResizableAndDraggable('.resize-drag')
    dropZone('.dropzone')
  }, [])

  return (
    <div id='app'>
      <Presentation globalState={globalState} setGlobalState={setGlobalState}/>
    </div>
  )
}

export default App
