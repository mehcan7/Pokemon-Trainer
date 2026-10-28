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

function App() {
  const [teams, setTeams] = useState([])
  const [favorites, setFavorites] = useState([])

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
