import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StoreProvider } from './state/store'
import { AuthProvider } from './state/auth'
import { LivesProvider } from './state/lives'
import { registerServiceWorker } from './pwa'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <AuthProvider>
        <LivesProvider>
          <App />
        </LivesProvider>
      </AuthProvider>
    </StoreProvider>
  </StrictMode>,
)

registerServiceWorker()
