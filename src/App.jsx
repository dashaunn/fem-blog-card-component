import { useState } from 'react'
import './App.css'
import PreviewCard from './components/PreviewCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <PreviewCard />
    </main>
  )
}

export default App
