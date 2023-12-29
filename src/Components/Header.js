import React from 'react'
import Connexion from './HeaderComps/Connexion'
import Links from './HeaderComps/Links'

const Header = () => {
  return (
    <header>
        <div className='logo-container'>
          <h1 className='Logo'>DRAFT</h1>
          <span className='Slogan'>Draft Your Path With Us</span>
        </div>
        <Links/>
        <Connexion/>
    </header>
    
  )
}

export default Header
