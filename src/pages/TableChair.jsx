import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TableChair.css'

const categories = [
  { name: '전체상품', path: '/' },
  { name: '베스트', path: '/best' },
  { name: '텐트·타프', path: '/tent' },
  { name: '침낭·매트', path: '/sleep' },
  { name: '테이블·의자', path: '/table-chair' },
  { name: '랜턴·화로', path: '/lantern' },
]

const products = [
  {
    id: 1,
    name: '캠핑 테이블',
    category: 'table-chair',
    subCategory: 'table',
    oldPrice: 29000,
    price: 24000,
    discount: 20,
    image: '/images/products/table1.jpg',
    rating: 5.0,
    review: 12,
  },
  {
    id: 2,
    name: '폴딩 캠핑 테이블',
    category: 'table-chair',
    subCategory: 'table',
    oldPrice: '35,000',
    price: '28,000',
    image: '/images/products/table2.png',
  },
  {
    id: 3,
    name: '루핏 좌식 의자',
    category: 'table-chair',
    subCategory: 'chair',
    oldPrice: '62,000',
    price: '39,000',
    image: '/images/products/chair1.png',
  },
  {
    id: 4,
    name: '캠포라 릴렉스 체어',
    category: 'table-chair',
    subCategory: 'chair',
    oldPrice: '59,000',
    price: '35,000',
    image: '/images/products/chair2.png',
  },
  {
    id: 5,
    name: '우드 감성 테이블',
    oldPrice: '60,000',
    price: '52,000',
    image: '/images/products/table2.png',
  },
    {
    id: 6,
    name: '경량 알루미늄 테이블',
    oldPrice: '45,000',
    price: '39,000',
    image: '/images/products/table3.png',
  },
  {
    id: 7,
    name: '미니 캠핑 테이블',
    oldPrice: '22,000',
    price: '18,000',
    image: '/images/products/table1.jpg',
  },
  {
    id: 8,
    name: '우드 감성 테이블',
    oldPrice: '60,000',
    price: '52,000',
    image: '/images/products/table2.png',
    soldout: true, 
  },
]



function TableChair() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')

  const filteredProducts = products.filter((item) => {
    if (filter === 'all') return item.category === 'table-chair'
    return item.category === 'table-chair' && item.subCategory === filter
  })
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
          <p>전체 {filteredProducts.length}개</p>

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
        <div className="sub-filter">
  <button
    className={filter === 'all' ? 'active' : ''}
    onClick={() => setFilter('all')}
  >
    전체
  </button>

  <button
    className={filter === 'table' ? 'active' : ''}
    onClick={() => setFilter('table')}
  >
    테이블
  </button>

  <button
    className={filter === 'chair' ? 'active' : ''}
    onClick={() => setFilter('chair')}
  >
    의자
  </button>
</div>

        <div className="product-grid">
          {filteredProducts.map((item) => (
            <article
  className="product-card"
  key={item.id}
  onClick={() => item.id === 1 && navigate(`/product/${item.id}`)}
>
              <div className={`product-img ${item.soldout ? 'soldout' : ''}`}
              style={{
                 backgroundImage: item.soldout ? 'none' : `url(${item.image})`,
                }}
              >
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