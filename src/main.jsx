import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/variables.css'
import './assets/css/reset.css'
import App from './App.jsx'

// Startpunt van de hele app: zet <App /> in het <div id="root"> uit index.html.
// BrowserRouter zet routing (paginawisselen zonder herladen) aan voor de hele app.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
