import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header({ cartAdded }) {

  const location = useLocation()

  const isBrandPage = location.pathname === '/brand'

  /* 상세페이지 여부 */
  const isDetailPage =
    location.pathname.includes('/product/')

  return (
    <header className={`campora-header ${isBrandPage ? 'brand-header' : ''}`}>

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
        <Link to="/search">⌕</Link>

        <Link to="/cart" className="cart-icon-wrap">
          🛒
          {cartAdded && <span className="cart-dot"></span>}
        </Link>
      </div>

    </header>
  )
}

export default Header