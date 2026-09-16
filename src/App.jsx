import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import List from './pages/List'
import Detail from './pages/Detail'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
