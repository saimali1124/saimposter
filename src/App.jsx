import { useState } from 'react'
import GameSetup from './components/GameSetup'
import RoleReveal from './components/RoleReveal'
import WarningPopup from './components/WarningPopup'
import RolesReveal from './components/RolesReveal'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('setup') // 'setup' | 'reveal' | 'complete' | 'rolesRevealed'
  const [gameData, setGameData] = useState(null)
  const [showWarning, setShowWarning] = useState(false)

  const handleGameStart = (data) => {
    setGameData(data)
    setGameState('reveal')
  }

  const handleGameComplete = () => {
    setGameState('complete')
  }

  const handleReset = () => {
    setGameState('setup')
    setGameData(null)
    setShowWarning(false)
  }

  const handleRevealRolesClick = () => {
    setShowWarning(true)
  }

  const handleWarningConfirm = () => {
    setShowWarning(false)
    setGameState('rolesRevealed')
  }

  const handleWarningCancel = () => {
    setShowWarning(false)
  }

  const handleBackFromRoles = () => {
    setGameState('complete')
  }

  return (
    <div className="app">
      {gameState === 'setup' && (
        <GameSetup onStart={handleGameStart} />
      )}
      {gameState === 'reveal' && gameData && (
        <RoleReveal 
          gameData={gameData} 
          onComplete={handleGameComplete}
        />
      )}
      {gameState === 'complete' && (
        <div className="complete-screen">
          <h1>Game Setup Complete!</h1>
          <p>Everyone has seen their roles.</p>
          <div className="complete-buttons">
            <button className="reset-button reveal-button" onClick={handleRevealRolesClick}>
              Reveal Roles
            </button>
            <button className="reset-button" onClick={handleReset}>
              New Game
            </button>
          </div>
        </div>
      )}
      {gameState === 'rolesRevealed' && gameData && (
        <RolesReveal 
          gameData={gameData}
          onBack={handleBackFromRoles}
        />
      )}
      {showWarning && (
        <WarningPopup 
          onConfirm={handleWarningConfirm}
          onCancel={handleWarningCancel}
        />
      )}
    </div>
  )
}

export default App

