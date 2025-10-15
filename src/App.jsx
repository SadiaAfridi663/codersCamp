import { useState } from 'react'
// import HomeHero from "./Component/Home/HomeHero"
// import Home from './Pages/Home'
import Listing from './Pages/Listing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Home /> */}
      <Listing />
    </div>
  )
}

export default App
