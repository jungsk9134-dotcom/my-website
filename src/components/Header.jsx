import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const location = useLocation()
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart =
        JSON.parse(localStorage.getItem('cartItems')) || []

      const totalCount = savedCart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      )

      setCartCount(totalCount)
    }

    updateCartCount()

    window.addEventListener('storage', updateCartCount)
    window.addEventListener('cartUpdated', updateCartCount)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  const isWhiteHeaderPage =
  location.pathname === '/brand' ||
  location.pathname === '/curation/fire'
  const isDetailPage = location.pathname.includes('/product/')

  return (
    <header
      className={`campora-header ${
        isWhiteHeaderPage ? 'brand-header' : ''
      }`}
    >
      <Link to="/" className="logo">
        <img
          src={
            isDetailPage
              ? '/images/logo/gold-logo.png'
              : '/images/logo/logo2.png'
          }
          alt="campora logo"
          className="logo-img"
        />
      </Link>

      <nav className="campora-nav">
        <Link to="/brand">브랜드</Link>
        <Link to="/category/tent">텐트 · 타프</Link>
        <Link to="/category/sleep">침낭 · 매트</Link>
        <Link to="/category/table-chair">테이블 · 의자</Link>
        <Link to="/category/lantern">랜턴 · 화로</Link>
        <Link to="/curation">큐레이션</Link>
      </nav>

      <div className="header-icons">
        <Link to="/search" className="search-icon">
          ⌕
        </Link>

        <Link to="/cart" className="cart-icon-wrap">
          <ShoppingCart size={20} strokeWidth={2} />

          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header