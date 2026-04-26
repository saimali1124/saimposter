import { useState } from 'react'
import GameSetup from './components/GameSetup'
import RoleReveal from './components/RoleReveal'
import WarningPopup from './components/WarningPopup'
import RolesReveal from './components/RolesReveal'
import ChallengesBoard from './components/ChallengesBoard'
import InstallPrompt from './components/InstallPrompt'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('setup')
  const [gameData, setGameData] = useState(null)
  const [showWarning, setShowWarning] = useState(false)
  const [savedPlayers, setSavedPlayers] = useState(null)

  const handleGameStart = (data) => {
    setSavedPlayers(data.savedPlayerNames)
    setGameData(data)
    setGameState('reveal')
  }

  const handleGameComplete = () => {
    if (gameData?.challengeMode) {
      setGameState('challenges')
    } else {
      setGameState('complete')
    }
  }

  const handleChallengesDone = () => {
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
        <GameSetup onStart={handleGameStart} savedPlayers={savedPlayers} />
      )}
      {gameState === 'reveal' && gameData && (
        <RoleReveal 
          gameData={gameData} 
          onComplete={handleGameComplete}
        />
      )}
      {gameState === 'challenges' && gameData && (
        <ChallengesBoard
          gameData={gameData}
          onDone={handleChallengesDone}
        />
      )}
      {gameState === 'complete' && (
        <div className="complete-screen">
          <h1>Game Setup Complete!</h1>
          <p>Everyone has seen their roles.</p>
          <p className="instruction-text">Turn off the device and start playing!</p>
          <div className="complete-buttons">
            {gameData?.challengeMode && (
              <button className="reset-button challenges-button" onClick={() => setGameState('challenges')}>
                View Challenges
              </button>
            )}
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
      <InstallPrompt />
    </div>
  )
}

export default App
