import './WarningPopup.css'

const WarningPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="warning-popup-overlay" onClick={onCancel}>
      <div className="warning-popup" onClick={(e) => e.stopPropagation()}>
        <div className="warning-icon">⚠️</div>
        <h2>Warning!</h2>
        <p className="warning-message">
          You are about to reveal all roles and words assigned in this game.
        </p>
        <p className="warning-message">
          This will show everyone's roles and spoil the game!
        </p>
        <p className="warning-question">
          Are you sure you want to continue?
        </p>
        <div className="warning-buttons">
          <button className="warning-btn cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="warning-btn confirm-btn" onClick={onConfirm}>
            Yes, Reveal All
          </button>
        </div>
      </div>
    </div>
  )
}

export default WarningPopup

