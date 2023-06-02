import React, {useEffect} from 'react'
import './App.css'
import Text from './Components/Text/Text'
import makeResizableAndDraggable from './Utilities/Interact/resizableDraggable'
import dropZone from './Utilities/Interact/dropzone'
import Canvas from './Components/Canvas/Canvas'

function App() {

  useEffect(()=>{
    // These functions accept css selectors and give them interactive 
    // properties e.g; draggable, resizable, dropzone, etc.
    makeResizableAndDraggable('.resize-drag')
    dropZone('.dropzone')
  }, [])

  return (
    <div id='app'>

      <Text />
      <Canvas />
    </div>
  )
}

export default App
