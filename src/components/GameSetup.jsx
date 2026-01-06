import { useState } from 'react'
import { gameModes, getRandomWord } from '../gameModes'
import './GameSetup.css'

const GameSetup = ({ onStart }) => {
  const [players, setPlayers] = useState([''])
  const [selectedMode, setSelectedMode] = useState('specialRoles')
  const [difficulty, setDifficulty] = useState('easy')

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...players]
    newPlayers[index] = value
    setPlayers(newPlayers)
  }

  const addPlayer = () => {
    setPlayers([...players, ''])
  }

  const removePlayer = (index) => {
    if (players.length > 1) {
      const newPlayers = players.filter((_, i) => i !== index)
      setPlayers(newPlayers)
    }
  }

  const handleStart = () => {
    const validPlayers = players.filter(p => p.trim() !== '')
    
    if (validPlayers.length < gameModes[selectedMode].minPlayers) {
      alert(`Need at least ${gameModes[selectedMode].minPlayers} players!`)
      return
    }

    if (validPlayers.length > gameModes[selectedMode].maxPlayers) {
      alert(`Maximum ${gameModes[selectedMode].maxPlayers} players allowed!`)
      return
    }

    // Shuffle players
    const shuffledPlayers = [...validPlayers].sort(() => Math.random() - 0.5)
    
    // Get roles for this game mode
    const roleList = gameModes[selectedMode].roleDistribution(validPlayers.length)
    const shuffledRoles = [...roleList].sort(() => Math.random() - 0.5)
    
    // Get word
    const wordData = getRandomWord(difficulty)
    
    // Find the imposter player first
    const imposterIndex = shuffledRoles.indexOf('imposter')
    const imposterPlayer = imposterIndex !== -1 ? shuffledPlayers[imposterIndex] : null
    
    // Assign roles to players
    const playerRoles = shuffledPlayers.map((player, index) => {
      const roleKey = shuffledRoles[index]
      const role = gameModes[selectedMode].roles[roleKey]
      
      return {
        name: player,
        role: roleKey,
        roleName: role.name,
        roleDescription: role.description,
        word: role.hasWord ? wordData.word : null,
        imposterWord: !role.hasWord ? wordData.imposters[Math.floor(Math.random() * wordData.imposters.length)] : null,
        knowsImposter: roleKey === 'bodyguard' ? imposterPlayer : null,
      }
    })

    onStart({
      mode: selectedMode,
      modeName: gameModes[selectedMode].name,
      players: playerRoles,
      word: wordData.word,
      difficulty,
    })
  }

  const mode = gameModes[selectedMode]
  const playerCount = players.filter(p => p.trim() !== '').length

  return (
    <div className="game-setup">
      <h1 className="setup-title">Saimposter</h1>
      <p className="setup-subtitle">GoCoffee Edition</p>

      <div className="setup-section">
        <h2>Game Mode</h2>
        <div className="mode-selector">
          <select 
            value={selectedMode} 
            onChange={(e) => setSelectedMode(e.target.value)}
            className="mode-select"
          >
            {Object.values(gameModes).map(mode => (
              <option key={mode.id} value={mode.id}>
                {mode.name}
              </option>
            ))}
          </select>
          <p className="mode-description">{mode.description}</p>
          <p className="player-range">
            Players: {mode.minPlayers} - {mode.maxPlayers}
          </p>
        </div>
      </div>

      <div className="setup-section">
        <h2>Difficulty</h2>
        <div className="difficulty-buttons">
          {['easy', 'medium', 'hard'].map(level => (
            <button
              key={level}
              className={`difficulty-btn ${difficulty === level ? 'active' : ''}`}
              onClick={() => setDifficulty(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
        <div className="difficulty-explanation">
          <p className="difficulty-desc">
            <strong>Easy:</strong> Simple, everyday words (e.g., Beach, Pizza, Doctor)
          </p>
          <p className="difficulty-desc">
            <strong>Medium:</strong> More specific concepts (e.g., Library, Chef, Airplane)
          </p>
          <p className="difficulty-desc">
            <strong>Hard:</strong> Complex or technical terms (e.g., Archaeologist, Observatory, Symphony)
          </p>
        </div>
      </div>

      <div className="setup-section">
        <div className="players-header">
          <h2>Players ({playerCount})</h2>
          <button className="add-player-btn" onClick={addPlayer}>
            + Add
          </button>
        </div>
        <div className="players-list">
          {players.map((player, index) => (
            <div key={index} className="player-input-group">
              <input
                type="text"
                placeholder={`Player ${index + 1}`}
                value={player}
                onChange={(e) => handlePlayerChange(index, e.target.value)}
                className="player-input"
                maxLength={20}
              />
              {players.length > 1 && (
                <button
                  className="remove-player-btn"
                  onClick={() => removePlayer(index)}
                  aria-label="Remove player"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        className="start-button"
        onClick={handleStart}
        disabled={playerCount < mode.minPlayers || playerCount > mode.maxPlayers}
      >
        Start Game
      </button>
    </div>
  )
}

export default GameSetup

