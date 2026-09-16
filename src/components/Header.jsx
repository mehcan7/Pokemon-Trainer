// Header component: staat bovenaan elke pagina (want hij staat in App.jsx,
// buiten de <Routes>, dus hij wisselt nooit mee met de pagina).
function Header() {
  return (
    <header>
      <h1>Pokemon Team Manager</h1> {/* titel van de app */}
    </header>
  )
}

export default Header
