import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="campora-header">
      <Link to="/" className="logo">campora</Link>

      <nav className="campora-nav">
        <Link to="/">브랜드</Link>
        <Link to="/">큐레이션</Link>
        <Link to="/">텐트·타프</Link>
        <Link to="/">침낭·매트</Link>
        <Link to="/table-chair">테이블·의자</Link>
        <Link to="/">랜턴·화로</Link>
      </nav>

      <div className="header-icons">
        <span>⌕</span>
        <span>🛒</span>
      </div>
    </header>
  )
}

export default Header