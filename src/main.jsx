import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')

if (!rootEl) {
  console.error('ROOT ELEMENT NOT FOUND')
} else {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } catch (err) {
    console.error('MOUNT ERROR:', err)
    rootEl.innerHTML = `<div style="color:red;padding:40px;font-family:monospace;white-space:pre-wrap">MOUNT ERROR:\n${err?.stack || err}</div>`
  }
}
