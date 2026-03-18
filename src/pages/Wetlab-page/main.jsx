import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wetlab from './Wetlab'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wetlab />
  </StrictMode>
)
