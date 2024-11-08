import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink className="navigation" to="/">
        Home
      </NavLink>
    </nav>
  )
}
