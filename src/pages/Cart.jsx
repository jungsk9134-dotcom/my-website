import './Cart.css'

function Cart({ cartItems, setCartItems }) {
  const handleDelete = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  const getPriceNumber = (price) => {
    return Number(price.replace(/[^0-9]/g, ''))
  }

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + getPriceNumber(item.price)
  }, 0)

  const deliveryFee = cartItems.length > 0 ? 3000 : 0
  const finalPrice = totalPrice + deliveryFee

  const formatPrice = (price) => {
    return price.toLocaleString() + '원'
  }

  const isAllChecked = cartItems.length > 0

  return (
    <main className="cart-page">
      <div className="cart-breadcrumb">홈 &gt; 장바구니</div>

      <section className="cart-container">
        <div className="cart-left">
          <h2>장바구니</h2>

          <label className="cart-check-all">
            <input type="checkbox" checked={isAllChecked} readOnly />
            <span>전체</span>
          </label>

          {cartItems.length === 0 ? (
            <p className="empty-cart">장바구니가 비어 있습니다.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onDelete={() => handleDelete(item.id)}
              />
            ))
          )}
        </div>

        <aside className="cart-summary">
          <h2>주문상세</h2>

          <button className="delete-btn">선택삭제</button>

          <div className="summary-row">
            <span>총 상품 금액</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>

          <div className="summary-row">
            <span>배송비</span>
            <strong>{formatPrice(deliveryFee)}</strong>
          </div>

          <div className="summary-total">
            <span>결제예정금액</span>
            <strong>{formatPrice(finalPrice)}</strong>
          </div>

          <button className="order-btn">전체상품주문</button>
          <button className="order-btn">선택상품주문</button>
        </aside>
      </section>

      <footer className="cart-footer"></footer>
    </main>
  )
}

function CartItem({ item, onDelete }) {
  return (
    <div className="cart-item-wrap">
      <input type="checkbox" checked readOnly className="item-check" />

      <div className="cart-item">
        <div className="item-img">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="item-info">
          <p className="item-name">{item.name}</p>
          <p className="item-option">옵션 1 / 옵션2</p>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <p className="item-price">{item.price}</p>

        <button
          className="remove-item-btn"
          onClick={onDelete}
        >
          삭제
        </button>
      </div>
    </div>
  )
}

export default Cart