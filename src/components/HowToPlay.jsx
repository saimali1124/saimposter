import { challengeModifiers } from '../gameModes'
import './HowToPlay.css'

const HowToPlay = ({ onClose }) => {
  return (
    <div className="htp-overlay" onClick={onClose}>
      <div className="htp-popup" onClick={(e) => e.stopPropagation()}>
        <div className="htp-header">
          <h2>How to Play</h2>
          <button className="htp-close" onClick={onClose}>×</button>
        </div>

        <div className="htp-body">
          <div className="htp-section">
            <h3>Secret Roles</h3>
            <div className="htp-role-item">
              <span className="htp-role-name">Civilian</span>
              <span className="htp-role-desc">Knows the secret word. Find the Imposter!</span>
            </div>
            <div className="htp-role-item">
              <span className="htp-role-name">Imposter</span>
              <span className="htp-role-desc">Has no word. Blend in and avoid suspicion.</span>
            </div>
            <div className="htp-role-item">
              <span className="htp-role-name">Bodyguard</span>
              <span className="htp-role-desc">Knows the word and who the Imposter is. Helps the Imposter win.</span>
            </div>
          </div>

          <div className="htp-section">
            <h3>How It Works</h3>
            <ol className="htp-steps">
              <li>Add player names and start the game.</li>
              <li>Pass the phone around — each player taps to see their secret role and word.</li>
              <li>Once everyone has seen their role, put the phone down and play in person!</li>
              <li>Discuss, give clues, and vote to find the Imposter.</li>
            </ol>
          </div>

          <div className="htp-section">
            <h3>Challenge Roles (Optional)</h3>
            <p className="htp-section-desc">
              When Challenge Mode is enabled, each player also gets a unique public challenge that everyone can see.
            </p>
            {challengeModifiers.map((mod) => (
              <div key={mod.id} className="htp-challenge-item">
                <span className="htp-challenge-emoji">{mod.emoji}</span>
                <div className="htp-challenge-info">
                  <span className="htp-challenge-name">{mod.name}</span>
                  <span className="htp-challenge-desc">{mod.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay
