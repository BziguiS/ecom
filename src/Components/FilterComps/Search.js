import React from 'react'
import searchIcon from './../../Assets/search-icon.png'

const Search = () => {
  return (
    <div className='searchbar'>
        <div className="searchbar-container">
            <input placeholder='Search ...' type="text" />
            <button className='search-icon-container'>
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    </div>
  )
}

export default Search
