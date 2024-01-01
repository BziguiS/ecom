import React from 'react'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="categories-container">
        <div className="categorie active-categorie">
            <button className='categorie-btn'>All</button>
        </div>
        <div className="categorie">
            <button className='categorie-btn'>Watches</button>
        </div>
        <div className="categorie">
            <button className='categorie-btn'>Necklaces</button>
        </div>
        <div className="more-button-container">
            <div className='more-btn'>
                <button className='more-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 55 55" fill="none">
                        <circle cx="27.5" cy="27.5" r="26" transform="rotate(90 27.5 27.5)" stroke="#D2BC9D" stroke-width="3"/>
                        <path d="M35 22L27.377 34L20 22" stroke="#D2BC9D" stroke-width="4"/>
                    </svg>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
