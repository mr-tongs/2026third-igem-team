import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Team from './Team'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Team />
  </StrictMode>
)
