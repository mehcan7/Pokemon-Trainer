import { NavLink } from 'react-router-dom'
import '../assets/css/navigation.css'

// NavLink werkt als <Link>, maar weet ook op welke pagina je nu bent
// en zet daar automatisch de klasse "active" op (zie navigation.css).
// end op de Home-link voorkomt dat Home "actief" blijft op elke andere pagina.
function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/list">List</NavLink></li>
        <li><NavLink to="/favorites">Favorieten</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
