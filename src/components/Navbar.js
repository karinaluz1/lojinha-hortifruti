import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav__item">
        <img src="public/img/fruta.svg" alt="icone de melancia" width="30" />
        <h2>Frutas</h2>
      </Link>
      <div className="nav__item">
        <h2>Verduras</h2>
      </div>
      <div className="nav__item">
        <h2>Legumes</h2>
      </div>
      <div className="nav__item">
        <h2>Folhas</h2>
      </div>
      <div className="nav__item">
        <h2>Ervas</h2>
      </div>
      <div className="nav__item">
        <h2>Laticínios</h2>
      </div>
    </nav>
  )
}
