import React from 'react'
import Categories from './FilterComps/Categories'
import Search from './FilterComps/Search'
import './../Components/FilterComps/Filter.css'

const Filter = () => {
  return (
    <section className="filter">
          <Categories></Categories>
          <Search></Search>
    </section>
  )
}

export default Filter
