import React from 'react'
import productImage from'./../../Assets/product-image.png'

const Card = () => {
  return (
    <div className="product-card">
        <div className="product-img">
            <img src={productImage} alt="{Product Name} couldn't load. Check your connexion." />
        </div>
        <div className="product-infos">
            <h3 className='product-name'>Product Name</h3>
            <p className="product-price">3000 DA</p>
        </div>
    </div>
  )
}

export default Card
