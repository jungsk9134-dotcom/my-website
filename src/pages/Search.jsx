import { useState } from 'react'
import './Search.css'
import { Search as SearchIcon, ShoppingCart, Heart } from 'lucide-react'

function Search() {
  const [keyword, setKeyword] = useState('')
  const [cartItems, setCartItems] = useState([])

  const products = [
    { id: 1, name: '텐트', desc: 'OO% / 캠핑텐트', price: '₩ 46,000' },
    { id: 2, name: '테이블', desc: 'OO% / 테이블기기', price: '₩ 46,000' },
    { id: 3, name: '침낭', desc: 'OO% / 캠핑침낭', price: '₩ 46,000' },
    { id: 4, name: '랜턴', desc: 'OO% / 캠핑랜턴', price: '₩ 46,000' },
    { id: 5, name: '수납', desc: 'OO% / 캠핑수납', price: '₩ 50,000' },
  ]

  const searchedProducts = products.filter((item) =>
    `${item.name} ${item.desc}`.toLowerCase().includes(keyword.toLowerCase())
  )

  const handleCartClick = (id) => {
    setCartItems((prev) => {
      if (prev.includes(id)) {
        return prev
      }
      return [...prev, id]
    })
  }

  return (
    <div className="search-page">
      <main className="search-main">
        <div className="breadcrumb">홈 &gt; 검색</div>

        <section className="search-section">
          <h2>상품 검색</h2>

          <div className="search-box">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            <SearchIcon size={17} />
          </div>
        </section>

        <div className="line"></div>

        <section className="product-area">
          <div className="product-top">
            <p>전체 {searchedProducts.length}개</p>

            <div className="filter">
              <span>무료배송</span>
              <button type="button">신상</button>
              <button type="button">정렬</button>

              <select>
                <option>인기순</option>
                <option>가격낮은순</option>
                <option>가격높은순</option>
              </select>
            </div>
          </div>

          <div className="product-list">
            {searchedProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="image-box"></div>

                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <strong>{item.price}</strong>

                  <div className="card-icons">
                    <Heart size={13} />

                    <button
                      type="button"
                      className="cart-icon-wrap"
                      onClick={() => handleCartClick(item.id)}
                    >
                      <ShoppingCart size={13} />

                      {cartItems.includes(item.id) && (
                        <span className="cart-dot"></span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {searchedProducts.length === 0 && (
            <p className="no-result">검색 결과가 없습니다.</p>
          )}
        </section>
      </main>

      <footer className="search-footer"></footer>
    </div>
  )
}

export default Search