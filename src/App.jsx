import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCar from './components/AddCar'
import ViewCar from './components/ViewCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewCar/>
    </>
  )
}

export default App
