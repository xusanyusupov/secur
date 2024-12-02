import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <ul className='navbar'>
          <NavLink to={'/login'} className='links'>
            Login
          </NavLink>
        </ul>
      </div>
    </header>
  )
}

export default Header
