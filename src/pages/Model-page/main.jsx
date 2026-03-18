import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Model from './Model'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Model />
  </StrictMode>
)
