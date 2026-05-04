import { useNavigate } from 'react-router-dom'

const categories = [
  { name: '전체상품', path: '/' },
  { name: '베스트', path: '/best' },
  { name: '텐트·타프', path: '/tent' },
  { name: '침낭·매트', path: '/sleep' },
  { name: '테이블·의자', path: '/table-chair' },
  { name: '랜턴·화로', path: '/lantern' },
]

const products = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  oldPrice: '29,000',
  price: '24,000',
  soldout: i === 10,
  image: '',
}))

function Sleep() {
  const navigate = useNavigate()

  return (
    <main className="product-page">
      <section className="product-hero">
        <p>
          당신의 첫 캠핑부터, 가장 특별했던 순간까지<br />
          Campora와 함께, 당신만의 캠핑을 완성해보세요.
        </p>
      </section>

      <section className="product-category">
        {categories.map((item) => (
          <div 
            className="product-category-item" 
            key={item.name}
            onClick={() => navigate(item.path)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-category-circle"></div>
            <p>{item.name}</p>
          </div>
        ))}
      </section>

      <section className="product-wrap">
        <div className="product-top">
          <p>전체 nn개</p>

          <div className="product-filter">
            <label><input type="checkbox" /> 무료배송</label>
            <select>
              <option>정렬</option>
              <option>인기순</option>
              <option>가격높은순</option>
              <option>가격낮은순</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <article className="product-card" key={item.id}>
              <div className={`product-img ${item.soldout ? 'soldout' : ''}`}>
                {item.image && <img src={item.image} alt={item.name} />}
                {item.soldout && <span>Soldout</span>}
              </div>

              <h3>{item.name}</h3>
              <p className="old-price">{item.oldPrice}</p>
              <p className="price">{item.price}</p>

              <div className="product-bottom">
                <small>★★★★★ 리뷰 0</small>
                <div>
                  <span>♡</span>
                  <span>🛒</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="more-btn">더보기</button>
      </section>

      <footer className="campora-footer"></footer>
    </main>
  )
}

export default Sleep