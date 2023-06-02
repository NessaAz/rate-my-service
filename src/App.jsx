import React, {useEffect, useState} from 'react'
import './App.css'
import makeResizableAndDraggable from './Utilities/Interact/resizableDraggable'
import dropZone from './Utilities/Interact/dropzone'
import data from './Utilities/Data/data'
import Presentation from './Pages/Presentation/Presentation'

function App() {
  const [canvasData, setCanvasData] = useState(data)

  useEffect(()=>{
    // These functions accept css selectors and give them interactive 
    // properties e.g; draggable, resizable, dropzone, etc.
    makeResizableAndDraggable('.resize-drag')
    dropZone('.dropzone')
  }, [])

  return (
    <div id='app'>
      <Presentation canvasData={canvasData} setCanvasData={setCanvasData}/>
    </div>
  )
}

export default App
