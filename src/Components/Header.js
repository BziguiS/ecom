import React from 'react'
import Connexion from './HeaderComps/Connexion'
import Links from './HeaderComps/Links'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <div className='logo-container'>
          <div className='logo-box'>
          <h1 className='logo'>DRAFT</h1>
          <span className='slogan'>Draft Your Path With Us</span>
          </div>
        </div>
        
        <Links/>
        <Connexion/>
    </header>
    
  )
}

export default Header
