import { Routes, Route } from 'react-router-dom' // Routes/Route = het "verkeersbord": welke URL toont welke pagina
import Header from './components/Header'         // vaste bovenkant, staat op elke pagina
import Navigation from './components/Navigation'  // menu met links naar de pagina's
import Footer from './components/Footer'          // vaste onderkant, staat op elke pagina
import Home from './pages/Home'                    // pagina voor URL "/"
import List from './pages/List'                     // pagina voor URL "/list"
import Detail from './pages/Detail'                 // pagina voor URL "/detail/:id"
import './App.css'

// App is de hoofdcomponent van de hele applicatie.
// Header, Navigation en Footer blijven ALTIJD zichtbaar.
// Alleen het stuk binnen <Routes> wisselt, afhankelijk van de URL.
function App() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        {/* Routes kijkt naar de huidige URL en kiest hieronder de match: */}
        <Routes>
          <Route path="/" element={<Home />} />           {/* / -> Home pagina */}
          <Route path="/list" element={<List />} />        {/* /list -> List pagina */}
          <Route path="/detail/:id" element={<Detail />} /> {/* /detail/1, /detail/2, ... -> Detail pagina */}
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
