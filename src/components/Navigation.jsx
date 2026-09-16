import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/detail/1">Detail</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
