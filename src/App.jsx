import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import List from './pages/List'
import Favorites from './pages/Favorites'
import Team from './pages/Team'
import Detail from './pages/Detail'
import './assets/css/layout.css'
import './assets/css/shared.css'

// App is de hoofdcomponent. Header, Navigation en Footer staan altijd op
// het scherm. <Routes> bepaalt welke pagina daartussen getoond wordt.
//
// teams en favorites staan hier (en niet in een losse pagina), omdat
// meerdere pagina's ze allebei nodig hebben: List/Detail lezen & vullen ze,
// Team/Favorites tonen & beheren ze. Door ze hier te houden, kunnen we ze
// als props doorgeven aan alle pagina's die ze nodig hebben.
function App() {
  const [teams, setTeams] = useState([])       // lijst van { id, name, pokemons: [] }
  const [favorites, setFavorites] = useState([]) // lijst van favoriete Pokemon

  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List favorites={favorites} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/team" element={<Team teams={teams} setTeams={setTeams} />} />
          <Route path="/detail/:id" element={<Detail teams={teams} setTeams={setTeams} favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
