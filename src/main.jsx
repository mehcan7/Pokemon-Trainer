import { StrictMode } from 'react'          // extra check-laagje van React, waarschuwt in development voor fouten
import { createRoot } from 'react-dom/client' // functie om React aan de echte HTML-pagina te koppelen
import { BrowserRouter } from 'react-router-dom' // zet routing (paginawisselen zonder herladen) aan
import './index.css'                         // algemene stijl voor de hele app
import App from './App.jsx'                  // onze hoofdcomponent, met alle pagina's erin

// Dit bestand is het STARTPUNT van de hele app.
// document.getElementById('root') pakt het lege <div id="root"> uit index.html.
// createRoot(...).render(...) zet onze React-app daadwerkelijk in dat vakje.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter maakt routing mogelijk in de hele app. */}
    {/* Alles binnen deze wrapper mag <Routes>, <Route> en <Link> gebruiken. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
