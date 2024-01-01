import React from 'react'
import Card from './Card'

const ShopSection = () => {
  return (
    <section className='shop-first-section'>
        <div className='section-title-container'>
            <h1 className='section-title'>BEST SALES</h1>
        </div>
        <div className="products-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </section>
  )
}

export default ShopSection
