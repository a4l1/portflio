import React from 'react'

import '../Header/Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (

        <div className="container">
        <header className="header" >
            <div className="header-elm">
                <div className="logo"><a className="logo" href="#">Azizbek</a></div>

                <div className="site-header-nav  nav-togller">
                <nav className="header-nav">
                    <ul className="header-nav-item">
                        <li ><NavLink  to="/">About me</NavLink> </li>
                        <li ><NavLink to="/Services">Services</NavLink></li>
                        <li><NavLink to="/Contact"> Contact me</NavLink></li>
                    </ul>
                </nav>
            </div>
            </div>
        </header>

        </div>

  )
}
