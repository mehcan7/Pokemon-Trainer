import { useState } from 'react'
import Team from './pages/Team'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import List from './pages/List'
import Detail from './pages/Detail'
import './assets/css/layout.css'
import './assets/css/shared.css'

function App() {
  const [team, setTeam] = useState([])
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List team={team} setTeam={setTeam} />} />
          <Route path="/team" element={<Team team={team} setTeam={setTeam} />} />
          <Route path="/detail/:id" element={<Detail team={team} setTeam={setTeam} />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
