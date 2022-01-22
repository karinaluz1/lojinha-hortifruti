import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { countCartItems } = props
  return (
    <header className="navbar">
      <div className="navbar__search">
        <input placeholder="Buscar" className="navbar__input" type="text" />
        <button className="navbar__button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="navbar__profile">
        <Link to="/cart" className="navbar__cart">
          <i className="fas fa-shopping-cart"></i> {''}
          {countCartItems ? (
            <button className="navbar__badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        <Link to="/" className="navbar__link">
          Home
        </Link>
      </div>
    </header>
  )
}
