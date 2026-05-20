import { useState } from 'react'
import './ProductIcons.css'

function ProductIcons({ onCartClick }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="product-icon-box">
      <button
        type="button"
        className="product-icon-btn"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setLiked((prev) => !prev)
        }}
      >
        <img
          src={
            liked
              ? '/images/icons/ico-heart-aurora.png'
              : '/images/icons/ico-heart-black.png'
          }
          alt="찜하기"
          className="product-icon-img"
        />
      </button>

      <button
        type="button"
        className="product-icon-btn"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onCartClick(e)
        }}
      >
        <img
          src="/images/icons/ico-cart.png"
          alt="장바구니"
          className="product-icon-img"
        />
      </button>
    </div>
  )
}

export default ProductIcons