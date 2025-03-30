import React from 'react'

function GameComplete({ bugsFound, totalBugs, time }) {
  return (
    <div className="game-complete">
      <h1>Game Complete!</h1>
      <div className="results">
        <p>You found {bugsFound} out of {totalBugs} bugs</p>
        <p>Your time: {time}</p>
      </div>
      <h1>This is your key for next level ! </h1>
      <h2>A2jkkl342</h2>
    </div>
  )
}

export default GameComplete