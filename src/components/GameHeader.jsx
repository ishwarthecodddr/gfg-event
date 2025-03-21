import React from 'react'

function GameHeader({ bugsFound, totalBugs, time, isGameRunning, startGame }) {
  return (
    <header className="text-center mb-8 pb-4 border-b-2 border-gray-200">
      <h1 className="text-3xl font-bold mb-4">UI Bug Hunter</h1>
      <div className="flex justify-between my-4 text-xl font-bold">
        <div className="bug-counter">Bugs Found: {bugsFound}/{totalBugs}</div>
        <div className="timer">Time: {time}</div>
      </div>
      {!isGameRunning && (
        <button 
          className="px-8 py-4 text-xl bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
          onClick={startGame}
        >
          Start Game
        </button>
      )}
      {isGameRunning && (
        <p className="text-lg text-gray-600 my-4">Find and report all the UI bugs on this page!</p>
      )}
    </header>
  )
}

export default GameHeader