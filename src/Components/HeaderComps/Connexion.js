import React from 'react'
import saveLogo from './save-icons.png' 

const Connexion = () => {
  return (
    <div className='connec-container'>

      <div className="pages">

        <div className="save-page">
          <div className="save-icon">
            <div className="save-icon-container">
              <img className='saveLogo' src={saveLogo} alt="Save Icon" />
            </div>
          </div>
          <div className="save-text">
            <span>SAVED</span>
          </div>
        </div>

      </div>

      <div className='divider-container'>
        <div className='divider'></div>
      </div>
      
      <div className="logsign">

        <div className='login-container'>
            <button className='login-btn'>
              <span className='cnx-btn'>Login</span>
            </button>
        </div>

        <div className='inbetween'>
            <span>or</span>
        </div>

        <div className='signup-container'>
          <button className='signup-btn'>
            <span className='cnx-btn'>Sign Up</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Connexion
