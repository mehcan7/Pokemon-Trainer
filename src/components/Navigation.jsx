import { NavLink } from 'react-router-dom'
import '../assets/css/navigation.css'

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
