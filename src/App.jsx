import { useState } from 'react'
import './App.css'
import Registrationform from './components/forms/Registrationform'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div>
        <Registrationform />
      </div>
    </>
  )
}

export default App
