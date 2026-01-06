import './RolesReveal.css'

const RolesReveal = ({ gameData, onBack }) => {
  return (
    <div className="roles-reveal-screen">
      <div className="roles-reveal-header">
        <h1>All Roles Revealed</h1>
        <p className="reveal-subtitle">Game Mode: {gameData.modeName}</p>
      </div>

      <div className="roles-list">
        {gameData.players.map((player, index) => (
          <div key={index} className="role-reveal-card">
            <div className="player-name-reveal">
              <h2>{player.name}</h2>
            </div>
            <div className="role-info-reveal">
              <div className="role-name-reveal">{player.roleName}</div>
              <div className="role-desc-reveal">{player.roleDescription}</div>
            </div>
            <div className="word-info-reveal">
              {player.word ? (
                <div className="word-reveal">
                  <span className="word-label-reveal">Word:</span>
                  <span className="word-value-reveal">{player.word}</span>
                </div>
              ) : (
                <div className="word-reveal imposter-reveal">
                  <span className="word-label-reveal">Fake Word:</span>
                  <span className="word-value-reveal">{player.imposterWord}</span>
                  <span className="imposter-note-reveal">(Real word: {gameData.word})</span>
                </div>
              )}
            </div>
            {player.knowsImposter && (
              <div className="special-info-reveal">
                <span className="special-label-reveal">Knows Imposter:</span>
                <span className="special-value-reveal">{player.knowsImposter}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="back-button" onClick={onBack}>
        ← Back to Menu
      </button>
    </div>
  )
}

export default RolesReveal

