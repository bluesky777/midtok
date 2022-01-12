import { useState } from 'react'
import FeedVideos from './components/FeedVideos'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <main>
        <FeedVideos />
      </main>
    </div>
  )
}

export default App
