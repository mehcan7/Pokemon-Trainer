import '../assets/css/header.css'

// Header staat in App.jsx buiten <Routes>, dus hij blijft altijd zichtbaar,
// ongeacht welke pagina je bekijkt.
function Header() {
  return (
    <header>
      <h1>Pokemon Team Manager</h1>
      <div className="header-dots">
        <span className="dot-blue"></span>
        <span className="dot-yellow"></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header
