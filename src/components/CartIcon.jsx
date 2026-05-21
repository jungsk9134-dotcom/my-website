import './CartIcon.css'

function CartIcon({ className = '', onClick }) {
  return (
    <button
      type="button"
      className={`cart-img-button ${className}`}
      onClick={onClick}
    >
      <img
        src="/images/icons/ico-cart.png"
        alt="장바구니"
        className="cart-img-icon"
      />
    </button>
  )
}

export default CartIcon