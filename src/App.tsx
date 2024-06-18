import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [progressPercentage, setProgressPercentage] = useState<number>(0)

  return (
    <>
      <Header progressPercentagem={progressPercentage}/>
    </>
  )
}

export default App
