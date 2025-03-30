import { useState, useEffect } from 'react'
import './App.css'
import GameHeader from './components/GameHeader'
import BuggyPage from './components/BuggyPage'
import BugReporter from './components/BugReporter'
import GameComplete from './components/GameComplete'

function App() {
  const [bugsFound, setBugsFound] = useState(0)
  const [totalBugs] = useState(7)
  const [time, setTime] = useState(0)
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const [reportedBugs, setReportedBugs] = useState([])
  
  useEffect(() => {
    let timer
    if (isGameRunning) {
      timer = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isGameRunning])
  
  useEffect(() => {
    if (bugsFound === totalBugs) {
      setIsGameRunning(false)
      setGameComplete(true)
    }
  }, [bugsFound, totalBugs])
  
  const startGame = () => {
    setIsGameRunning(true)
    setBugsFound(0)
    setTime(0)
    setReportedBugs([])
    setGameComplete(false)
  }
  
  const reportBug = (bugId, bugType) => {
    if (!reportedBugs.includes(bugId)) {
      setReportedBugs(prev => [...prev, bugId])
      setBugsFound(prev => prev + 1)
    }
  }
  
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans">
      {gameComplete ? (
        <GameComplete 
          bugsFound={bugsFound} 
          totalBugs={totalBugs} 
          time={formatTime()} 
          restartGame={startGame}
        />
      ) : (
        <>
          <GameHeader 
            bugsFound={bugsFound} 
            totalBugs={totalBugs} 
            time={formatTime()} 
            isGameRunning={isGameRunning} 
            startGame={startGame}
          />
          {isGameRunning && (
            <>
              <BuggyPage />
              <BugReporter reportBug={reportBug} />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App
