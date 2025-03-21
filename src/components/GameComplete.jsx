import React from 'react'

function GameComplete({ bugsFound, totalBugs, time, restartGame }) {
  return (
    <div className="game-complete">
      <h1>Game Complete!</h1>
      <div className="results">
        <p>You found {bugsFound} out of {totalBugs} bugs</p>
        <p>Your time: {time}</p>
      </div>
      <button onClick={restartGame}>Play Again</button>
    </div>
  )
}

export default GameComplete