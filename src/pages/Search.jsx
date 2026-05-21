import { useEffect, useRef, useState } from 'react'
import {
  Search as SearchIcon,
  Heart,
  ShoppingCart
} from 'lucide-react'
import { products } from '../data/products'
import { Link, useNavigate } from 'react-router-dom'
import './Search.css'

function Search() {
  const defaultKeywords = ['랜턴', '침낭', '아이스박스', '체어', '테이블']

  const navigate = useNavigate()

  const [showCartPopup, setShowCartPopup] = useState(false)

  const sortOptions = [
    { label: '최신순', value: 'latest' },
    { label: '인기순', value: 'popular' },
    { label: '높은가격순', value: 'high' },
    { label: '낮은가격순', value: 'low' },
  ]

  const [keyword, setKeyword] = useState('')
  const [sortType, setSortType] = useState('latest')
  const [selectedKeyword, setSelectedKeyword] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const sortRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const recommendKeywords = selectedKeyword
    ? defaultKeywords.filter((item) => item !== selectedKeyword)
    : defaultKeywords

  const getPriceNumber = (price) => {
    return Number(String(price).replace(/[^0-9]/g, ''))
  }

  const currentSortLabel =
    sortOptions.find((item) => item.value === sortType)?.label || '최신순'

  const searchedProducts = products.filter((item) => {
    if (!keyword) return false

    const searchText = `
      ${item.name}
      ${item.category}
      ${item.subCategory}
      ${item.searchKeywords || ''}
    `.toLowerCase()

    return searchText.includes(keyword.toLowerCase())
  })

  const sortedProducts = [...searchedProducts].sort((a, b) => {

    // 최신순 : ID 오름차순
    if (sortType === 'latest') {
      return (a.id || 0) - (b.id || 0)
    }

    // 인기순 : 별점 + 리뷰수
    if (sortType === 'popular') {

      const scoreA =
        ((a.rating || 0) * 100) + (a.review || 0)

      const scoreB =
        ((b.rating || 0) * 100) + (b.review || 0)

      return scoreB - scoreA
    }

    // 높은 가격순
    if (sortType === 'high') {
      return getPriceNumber(b.price) - getPriceNumber(a.price)
    }

    // 낮은 가격순
    if (sortType === 'low') {
      return getPriceNumber(a.price) - getPriceNumber(b.price)
    }

    return 0
  })

  const handleInputChange = (e) => {
    setKeyword(e.target.value)
    setSelectedKeyword('')
    setSortType('latest')
  }

  const handleKeywordClick = (item) => {
    setKeyword(item)
    setSelectedKeyword(item)
    setSortType('latest')
  }

  const handleSortSelect = (value) => {
    setSortType(value)
    setIsSortOpen(false)
  }

  const handleAddToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || []

    const existItem = savedCart.find((item) => item.id === product.id)

    const updatedCart = existItem
      ? savedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
      : [...savedCart, { ...product, quantity: 1 }]

    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cartUpdated'))

    setShowCartPopup(true)
  }

  return (
    <main className="search-page">
      <div className="search-breadcrumb">홈 &gt; 상품 검색</div>

      <section className="search-hero">
        <h2>상품 검색</h2>

        <div className="search-box">
          <input
            type="text"
            value={keyword}
            onChange={handleInputChange}
            placeholder="검색어를 입력하세요"
          />
          <SearchIcon size={28} />
        </div>

        <div className="recommend-area">
          <p>관련 검색어</p>

          <div className="recommend-list">
            {recommendKeywords.map((item) => (
              <button
                key={item}
                className="normal-keyword"
                onClick={() => handleKeywordClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {keyword && (
        <section className="search-result-section">
          <div className="search-result-top">
            <p>상품 {searchedProducts.length}건</p>

            <div className="search-result-filter">


              <div className="custom-sort" ref={sortRef}>
                <button
                  type="button"
                  className="custom-sort-button"
                  onClick={() => setIsSortOpen((prev) => !prev)}
                >
                  {currentSortLabel}
                  <span>{isSortOpen ? '▲' : '▼'}</span>
                </button>

                {isSortOpen && (
                  <div className="custom-sort-menu">
                    {sortOptions.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={
                          sortType === item.value
                            ? 'custom-sort-option active'
                            : 'custom-sort-option'
                        }
                        onClick={() => handleSortSelect(item.value)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {searchedProducts.length === 0 ? (
            <div className="search-no-result">검색 결과가 없습니다</div>
          ) : (
            <div className="search-product-grid">
              {sortedProducts.map((item) => (
<article
  className="search-product-card"
  key={item.id}
>
<div
  className="search-product-link-area"
  onClick={() => navigate(`/product/${item.id}`)}
>

  <div
    className="search-product-img"
    style={{ backgroundImage: `url(${item.image})` }}
  ></div>

  <h3>{item.name}</h3>

  <p className="search-product-old-price">
    {item.discountRate > 0
      ? `${item.oldPrice}원`
      : null}
  </p>

  <div className="search-price-row">
    {item.discountRate > 0 && (
      <span className="search-discount-rate">
        {item.discountRate}%
      </span>
    )}

    <p className="search-product-price">
      {item.price}원
    </p>
  </div>

</div>

                  <div className="search-product-bottom">
                    <small>
                      ★ {item.rating || 4.8}&nbsp;&nbsp;({item.review || 0})
                    </small>

                    <div>
                      <Heart size={24} strokeWidth={1.7} style={{ fill: 'none', stroke: 'currentColor' }} />
                      <button
                        className="search-cart-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart size={24} strokeWidth={1.7}
                          style={{ fill: 'none', stroke: 'currentColor' }} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      <section className="event-section">
        <h3>봄맞이 할인 이벤트</h3>

        <Link to="/product/4" className="event-banner">
          <img
            src="/images/logo/search-banner.png"
            alt="침낭 광고 배너"
          />
        </Link>
      </section>
      {showCartPopup && (
        <div className="cart-popup-overlay">
          <div className="cart-popup">

            <p>장바구니로 이동하시겠습니까?</p>

            <div className="cart-popup-buttons">

              <button
                onClick={() => setShowCartPopup(false)}
              >
                계속 쇼핑하기
              </button>

              <button
                className="go-cart"
                onClick={() => navigate('/cart')}
              >
                장바구니 가기
              </button>

            </div>
          </div>
        </div>
      )}

    </main>
  )
}

export default Search