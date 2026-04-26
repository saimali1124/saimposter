import { useEffect, useState } from 'react'
import './InstallPrompt.css'

const DISMISS_KEY = 'saimposter-install-dismissed-at'
const DISMISS_TTL_MS = 1000 * 60 * 60 * 24 * 7

function isStandalone() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia?.('(display-mode: standalone)').matches) return true
  return window.navigator.standalone === true
}

function isIos() {
  if (typeof window === 'undefined') return false
  const ua = window.navigator.userAgent || ''
  const iOSDevice = /iPad|iPhone|iPod/.test(ua)
  const iPadOS =
    window.navigator.platform === 'MacIntel' &&
    (window.navigator.maxTouchPoints || 0) > 1
  const isWebKit = /WebKit/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua)
  return (iOSDevice || iPadOS) && isWebKit
}

function recentlyDismissed() {
  try {
    const raw = localStorage.getItem(DISMISS_KEY)
    if (!raw) return false
    const at = Number(raw)
    if (!Number.isFinite(at)) return false
    return Date.now() - at < DISMISS_TTL_MS
  } catch {
    return false
  }
}

function markDismissed() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()))
  } catch {
    /* ignore */
  }
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showIosHint, setShowIosHint] = useState(false)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    if (isStandalone()) {
      setInstalled(true)
      return
    }

    if (isIos() && !recentlyDismissed()) {
      setShowIosHint(true)
    }

    const onBeforeInstall = (e) => {
      e.preventDefault()
      if (recentlyDismissed()) return
      setDeferredPrompt(e)
    }

    const onInstalled = () => {
      setInstalled(true)
      setDeferredPrompt(null)
      setShowIosHint(false)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    try {
      await deferredPrompt.userChoice
    } catch {
      /* ignore */
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    markDismissed()
    setDeferredPrompt(null)
    setShowIosHint(false)
  }

  if (installed) return null

  if (deferredPrompt) {
    return (
      <div className="install-banner" role="dialog" aria-label="Install Saimposter">
        <div className="install-banner__text">
          <strong>Install Saimposter</strong>
          <span>Add to your home screen for the best experience.</span>
        </div>
        <div className="install-banner__actions">
          <button className="install-banner__primary" onClick={handleInstallClick}>
            Install
          </button>
          <button className="install-banner__secondary" onClick={handleDismiss} aria-label="Dismiss">
            Not now
          </button>
        </div>
      </div>
    )
  }

  if (showIosHint) {
    return (
      <div className="install-banner install-banner--ios" role="dialog" aria-label="Install Saimposter on iOS">
        <div className="install-banner__text">
          <strong>Install on iPhone</strong>
          <span>
            Tap the Share icon{' '}
            <span aria-hidden="true" className="install-banner__share-icon">⬆︎</span>{' '}
            then choose <em>Add to Home Screen</em>.
          </span>
        </div>
        <div className="install-banner__actions">
          <button className="install-banner__secondary" onClick={handleDismiss}>
            Got it
          </button>
        </div>
      </div>
    )
  }

  return null
}
