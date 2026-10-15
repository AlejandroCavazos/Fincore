import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StoreProvider } from './state/store'
import { AuthProvider } from './state/auth'
import { LivesProvider } from './state/lives'
import { CloudSync } from './state/cloud'
import { registerServiceWorker } from './pwa'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <AuthProvider>
        <LivesProvider>
          <App />
          <CloudSync />
        </LivesProvider>
      </AuthProvider>
    </StoreProvider>
  </StrictMode>,
)

registerServiceWorker()
