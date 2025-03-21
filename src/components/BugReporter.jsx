import { useState, useEffect } from 'react'

function BugReporter({ reportBug }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBugType, setSelectedBugType] = useState('')
  const [selectedElement, setSelectedElement] = useState(null)
  
  const bugTypes = [
    "Escaping Element", 
    "Inverted Text", 
    "Disappearing Element", 
    "Misbehaving Form", 
    "Confusing Navigation",
    "Visual Glitch"
  ]
  
  const handleElementClick = (e) => {
    if (isOpen) {
      e.stopPropagation()
      setSelectedElement(e.target)
    }
  }
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleElementClick)
    } else {
      document.removeEventListener('click', handleElementClick)
    }
    
    return () => {
      document.removeEventListener('click', handleElementClick)
    }
  }, [isOpen])
  
  const handleReport = () => {
    if (selectedElement && selectedBugType) {
      const bugId = selectedElement.dataset.bugId
      if (bugId) {
        reportBug(bugId, selectedBugType)
        setIsOpen(false)
        setSelectedBugType('')
        setSelectedElement(null)
      }
    }
  }
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        className={`py-3 px-6 ${isOpen ? 'bg-orange-700' : 'bg-orange-500'} 
          text-white rounded font-bold transition-colors`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Cancel' : 'Report Bug'}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 w-[300px] bg-white border border-gray-300 
          rounded p-4 mb-4 shadow-lg">
          <h3 className="mt-0 text-gray-800 font-bold">Report a Bug</h3>
          {selectedElement ? (
            <>
              <p>Element selected! What type of bug is it?</p>
              <select 
                className="w-full p-2 my-2 border border-gray-300 rounded"
                value={selectedBugType} 
                onChange={(e) => setSelectedBugType(e.target.value)}
              >
                <option value="">Select bug type</option>
                {bugTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <button 
                className={`p-2 ${selectedBugType ? 'bg-blue-500 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'} 
                  text-white rounded mt-2`}
                onClick={handleReport}
                disabled={!selectedBugType}
              >
                Submit Report
              </button>
            </>
          ) : (
            <p>Click on a buggy element to report it</p>
          )}
        </div>
      )}
    </div>
  )
}

export default BugReporter