import './CartIcon.css'

function CartIcon({ className = '' }) {
  return (
    <img
      src="/images/icons/ico-cart.png"
      alt="장바구니"
      className={`cart-img-icon ${className}`}
    />
  )
}

export default CartIcon