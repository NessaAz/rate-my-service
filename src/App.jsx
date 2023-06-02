import React, {useEffect} from 'react'
import './App.css'
import Text from './Components/Text/Text'
import resizeDrag from './Utilities/Interact/draggable'
import dropZone from './Utilities/Interact/dropzone'
import Canvas from './Components/Canvas/Canvas'

function App() {
  useEffect(()=>{
    resizeDrag()
    dropZone()
  }, [])

  return (
    <div id='app'>

      <Text />
      <Canvas />
    </div>
  )
}

export default App
