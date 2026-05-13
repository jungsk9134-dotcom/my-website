import { useState } from 'react'
import { Search as SearchIcon, Heart, ShoppingCart } from 'lucide-react'
import { products } from '../data/products'
import './Search.css'

function Search() {
  const [keyword, setKeyword] = useState('')

  const recommendKeywords = ['랜턴', '침낭', '아이스박스', '체어', '테이블']

  const searchedProducts = products.filter((item) => {
    const searchText = `
      ${item.name}
      ${item.category}
      ${item.subCategory}
      ${item.searchKeywords || ''}
    `.toLowerCase()

    return searchText.includes(keyword.toLowerCase())
  })

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
    alert('장바구니에 담겼습니다.')
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
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <SearchIcon size={28} />
        </div>

        <div className="recommend-area">
          <p>관련 검색어</p>

          <div className="recommend-list">
            {recommendKeywords.map((item) => (
              <button key={item} onClick={() => setKeyword(item)}>
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
              <label>
                <input type="checkbox" /> 무료배송
              </label>
              <span>≡</span>
              <button>정렬</button>
            </div>
          </div>

          {searchedProducts.length === 0 ? (
            <div className="search-no-result">검색 결과가 없습니다</div>
          ) : (
            <div className="search-product-grid">
              {searchedProducts.map((item) => (
                <article className="search-product-card" key={item.id}>
                  <div
                    className="search-product-img"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>

                  <h3>{item.name}</h3>

                  <p className="search-product-desc">{item.oldPrice}</p>

                  <p className="search-product-price">{item.price}</p>

                  <div className="search-product-bottom">
                    <small>★ {item.rating || 4.8}&nbsp;&nbsp;({item.review || 0})</small>

                    <div>
                      <Heart size={18} />
                      <button
                        className="search-cart-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart size={18} />
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

        <div className="event-banner">
          <p>침낭 광고 배너 &gt; 상품페이지로 바로 연결</p>
        </div>
      </section>

      <footer className="search-footer"></footer>
    </main>
  )
}

export default Search