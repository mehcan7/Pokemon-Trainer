import { Link } from 'react-router-dom' // <Link> = klikbare navigatie zonder de pagina te herladen

// Navigation component: menu om tussen pagina's te wisselen.
// <Link to="..."> lijkt op een gewone <a href="...">, maar React Router
// onderschept de klik en wisselt alleen het component -> geen volledige herlaad.
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>          {/* gaat naar de Home pagina (URL "/") */}
        <li><Link to="/list">List</Link></li>        {/* gaat naar de List pagina (URL "/list") */}
        <li><Link to="/detail/1">Detail</Link></li>   {/* gaat naar Detail met id=1 (URL "/detail/1") */}
      </ul>
    </nav>
  )
}

export default Navigation
