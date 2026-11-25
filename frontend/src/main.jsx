import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WorkoutContextProvider } from './context/WorkoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </StrictMode>,
)