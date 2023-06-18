import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Exactus Online</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" activeClassName="active" to={`/categoria/1`}> Monitores </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" activeClassName="active" to={`/categoria/2`}> Portatiles </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" activeClassName="active" to={`/categoria/3`}> Teclados </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar