import React from "react";

function Tutorial({ startGame }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-purple-500 p-8 rounded-lg max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to UI Bug Hunter!</h2>
        <p className="mb-4">
          Your goal is to find and report all the UI bugs on the page within the
          given time.
        </p>
        <ul className="text-left mb-4">
          <li>1. Choose the type of bug from the dropdown.</li>
          <li>2. Click on buggy elements to select them.</li>
          <li>3. Submit your report to mark the bug as found.</li>
          <li>4. Find all bugs before the timer runs out!</li>
        </ul>
        <button
          onClick={startGame}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Tutorial;
