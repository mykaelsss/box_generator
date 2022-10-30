import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import CreateBox from './components/CreateBox'

const App = () => {
const [currentBox, setCurrentBox] = useState("")
const createdBox = ( newBox ) => {
  setCurrentBox( newBox );
}
  return (
    <div className="App">
      <div>
        <CreateBox onNewBox={ createdBox } />
      </div>
    </div>
  )
}

export default App
