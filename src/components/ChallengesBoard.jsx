import './ChallengesBoard.css'

const ChallengesBoard = ({ gameData, onDone }) => {
  return (
    <div className="challenges-board">
      <div className="challenges-header">
        <h1>Player Challenges</h1>
        <p className="challenges-subtitle">Everyone can see this screen!</p>
      </div>

      <div className="challenges-list">
        {gameData.players.map((player, index) => (
          <div key={index} className="challenge-card">
            <div className="challenge-card-player">{player.name}</div>
            {player.challenge ? (
              <>
                <div className="challenge-card-badge">
                  <span className="challenge-card-emoji">{player.challenge.emoji}</span>
                  <span className="challenge-card-name">{player.challenge.name}</span>
                </div>
                <div className="challenge-card-desc">{player.challenge.description}</div>
              </>
            ) : (
              <div className="challenge-card-none">No challenge assigned</div>
            )}
          </div>
        ))}
      </div>

      <button className="challenges-done-btn" onClick={onDone}>
        Start Playing!
      </button>
    </div>
  )
}

export default ChallengesBoard
