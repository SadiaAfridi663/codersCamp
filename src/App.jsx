import { useState } from 'react'
import HomeHero from "./Component/Home/HomeHero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      < HomeHero />
    </div>
  )
}

export default App
