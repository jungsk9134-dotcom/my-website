import './Cart.css'
import { useEffect, useState } from 'react'

function Cart({ cartItems, setCartItems }) {
  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
    setSelectedIds(cartItems.map((item) => item.id))
  }, [cartItems])

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  }

  const handleToggleAll = () => {
    if (selectedIds.length === cartItems.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(cartItems.map((item) => item.id))
    }
  }

  const handleToggleItem = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    saveCart(updatedCart)
    setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
  }

  const handleDeleteSelected = () => {
    const updatedCart = cartItems.filter(
      (item) => !selectedIds.includes(item.id)
    )

    saveCart(updatedCart)
    setSelectedIds([])
  }

  const handleQuantityChange = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id !== id) return item

      const currentQuantity = item.quantity || 1

      if (type === 'increase') {
        return {
          ...item,
          quantity: currentQuantity + 1,
        }
      }

      if (type === 'decrease') {
        return {
          ...item,
          quantity: currentQuantity > 1 ? currentQuantity - 1 : 1,
        }
      }

      return item
    })

    saveCart(updatedCart)
  }

  const getPriceNumber = (price) => {
    return Number(String(price).replace(/[^0-9]/g, ''))
  }

  const selectedItems = cartItems.filter((item) =>
    selectedIds.includes(item.id)
  )

  const totalPrice = selectedItems.reduce((sum, item) => {
    return sum + getPriceNumber(item.price) * (item.quantity || 1)
  }, 0)

  const deliveryFee = selectedItems.length > 0 ? 3000 : 0
  const finalPrice = totalPrice + deliveryFee

  const formatPrice = (price) => {
    return price.toLocaleString() + '원'
  }

  const isAllChecked =
    cartItems.length > 0 && selectedIds.length === cartItems.length

  return (
    <main className="cart-page">
      <div className="cart-breadcrumb">홈 &gt; 장바구니</div>

      <h2 className="cart-title">장바구니</h2>

      <section className="cart-container">
        <div className="cart-left">
          <div className="cart-list-top">
            <label className="cart-check-all">
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={handleToggleAll}
              />
              <span>전체 선택</span>
            </label>

            <button
              className="delete-btn"
              onClick={handleDeleteSelected}
              disabled={selectedIds.length === 0}
            >
              선택삭제
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-cart">장바구니가 비어 있습니다.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                checked={selectedIds.includes(item.id)}
                onCheck={() => handleToggleItem(item.id)}
                onDelete={() => handleDelete(item.id)}
                onQuantityChange={handleQuantityChange}
              />
            ))
          )}
        </div>

        <aside className="cart-summary">
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

          <button className="order-btn outline">선택 상품 주문</button>
          <button className="order-btn">전체 상품 주문</button>
        </aside>
      </section>
    </main>
  )
}

function CartItem({
  item,
  checked,
  onCheck,
  onDelete,
  onQuantityChange,
}) {
  return (
    <div className="cart-item-wrap">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheck}
        className="item-check"
      />

      <div className="cart-item">
        <div className="item-img">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="item-info">
          <p className="item-name">{item.name}</p>
          <p className="item-option">옵션 1 / 옵션2</p>

          <div className="quantity">
            <button onClick={() => onQuantityChange(item.id, 'decrease')}>
              -
            </button>

            <span>{item.quantity || 1}</span>

            <button onClick={() => onQuantityChange(item.id, 'increase')}>
              +
            </button>
          </div>
        </div>

        <p className="item-price">
          {(
            Number(String(item.price).replace(/[^0-9]/g, '')) *
            (item.quantity || 1)
          ).toLocaleString()}
          원
        </p>

        <button className="remove-item-btn" onClick={onDelete}>
          ×
        </button>
      </div>
    </div>
  )
}

export default Cart