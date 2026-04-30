import { useNavigate } from 'react-router-dom'

const categories = ['전체상품', '베스트', '텐트·타프', '침낭·매트', '테이블·의자', '랜턴·화로']

const products = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: '캠핑 테이블',
  oldPrice: '29,000',
  price: '24,000',
  image: '/images/products/테이블_제품컷.jpg',
  soldout: i === 10,
}))

function TableChair() {
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
          <div className="product-category-item" key={item}>
            <div className="product-category-circle"></div>
            <p>{item}</p>
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
            <article
  className="product-card"
  key={item.id}
  onClick={() => item.id === 1 && navigate(`/product/${item.id}`)}
>
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

export default TableChair