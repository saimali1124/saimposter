import { useState } from 'react'
import './RoleReveal.css'

const RoleReveal = ({ gameData, onComplete }) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)

  const currentPlayer = gameData.players[currentPlayerIndex]
  const isLastPlayer = currentPlayerIndex === gameData.players.length - 1

  const handleReveal = () => {
    setIsRevealed(true)
  }

  const handleNext = () => {
    if (isLastPlayer) {
      onComplete()
    } else {
      setCurrentPlayerIndex(currentPlayerIndex + 1)
      setIsRevealed(false)
    }
  }

  const handlePrevious = () => {
    if (currentPlayerIndex > 0) {
      setCurrentPlayerIndex(currentPlayerIndex - 1)
      setIsRevealed(false)
    }
  }

  return (
    <div className="role-reveal">
      <div className="reveal-header">
        <div className="player-counter">
          Player {currentPlayerIndex + 1} of {gameData.players.length}
        </div>
        <div className="game-mode-badge">{gameData.modeName}</div>
      </div>

      <div className="reveal-content">
        {!isRevealed ? (
          <div className="pre-reveal">
            <div className="player-name-display">
              <h2>{currentPlayer.name}</h2>
            </div>
            <div className="reveal-instruction">
              <p>Tap to reveal your role</p>
            </div>
            <button className="reveal-button" onClick={handleReveal}>
              Reveal Role
            </button>
          </div>
        ) : (
          <div className="post-reveal">
            <div className="role-card">
              <div className="role-header">
                <h1 className="role-name">{currentPlayer.roleName}</h1>
              </div>
              
              <div className="role-description">
                <p>{currentPlayer.roleDescription}</p>
              </div>

              <div className="word-section">
                {currentPlayer.word ? (
                  <div className="word-display">
                    <div className="word-label">Your Word:</div>
                    <div className="word-value">{currentPlayer.word}</div>
                  </div>
                ) : (
                  <div className="word-display imposter-word">
                    <div className="word-label">Your Word:</div>
                    <div className="word-value">{currentPlayer.imposterWord}</div>
                    <div className="imposter-note">(You don't know the real word)</div>
                  </div>
                )}
              </div>

              {currentPlayer.knowsImposter && (
                <div className="special-info">
                  <div className="special-label">You know the Imposter is:</div>
                  <div className="special-value">{currentPlayer.knowsImposter}</div>
                </div>
              )}

              {currentPlayer.role === 'jester' && (
                <div className="special-info warning">
                  <div className="special-label">⚠️ Your Goal:</div>
                  <div className="special-value">
                    Get voted out to win alone!
                  </div>
                </div>
              )}
            </div>

            <div className="navigation-buttons">
              {currentPlayerIndex > 0 && (
                <button className="nav-button prev-button" onClick={handlePrevious}>
                  ← Previous
                </button>
              )}
              <button className="nav-button next-button" onClick={handleNext}>
                {isLastPlayer ? 'Complete' : 'Next Player →'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoleReveal

