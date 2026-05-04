import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import './CategoryPage.css'

const categories = [
  { name: '전체상품', path: '/category/all' },
  { name: '베스트', path: '/category/best' },
  { name: '텐트·타프', path: '/category/tent' },
  { name: '침낭·매트', path: '/category/sleep' },
  { name: '테이블·의자', path: '/category/table-chair' },
  { name: '랜턴·화로', path: '/category/lantern' },
]

const categoryInfo = {
  'table-chair': {
    filters: [
      { label: '전체', value: 'all' },
      { label: '테이블', value: 'table' },
      { label: '의자', value: 'chair' },
    ],
  },
  sleep: {
    filters: [
      { label: '전체', value: 'all' },
      { label: '침낭', value: 'sleeping' },
      { label: '매트', value: 'mat' },
    ],
  },
  tent: {
    filters: [
      { label: '전체', value: 'all' },
      { label: '텐트', value: 'tent' },
      { label: '타프', value: 'tarp' },
    ],
  },
  lantern: {
    filters: [
      { label: '전체', value: 'all' },
      { label: '랜턴', value: 'lantern' },
      { label: '화로', value: 'stove' },
    ],
  },
}

function CategoryPage() {
  const navigate = useNavigate()
  const { type } = useParams()
  const [filter, setFilter] = useState('all')

  const currentInfo = categoryInfo[type] || categoryInfo['table-chair']

  const filteredProducts = products.filter((item) => {
    if (type === 'all' || type === 'best') return true
    if (item.category !== type) return false
    if (filter === 'all') return true
    return item.subCategory === filter
  })

  return (
    <main className="category-page">
      <section className="category-hero">
        <p>
          당신의 첫 캠핑부터, 가장 특별했던 순간까지<br />
          Campora와 함께, 당신만의 캠핑을 완성해보세요.
        </p>
      </section>

      <section className="category-menu">
        {categories.map((item) => (
          <div
            className="category-menu-item"
            key={item.name}
            onClick={() => {
              setFilter('all')
              navigate(item.path)
            }}
          >
            <div className="category-menu-circle"></div>
            <p>{item.name}</p>
          </div>
        ))}
      </section>

      <section className="category-wrap">
        <div className="category-top">
          <p>전체 {filteredProducts.length}개</p>

          <div className="category-filter">
            <label>
              <input type="checkbox" /> 무료배송
            </label>

            <select>
              <option>정렬</option>
              <option>인기순</option>
              <option>가격높은순</option>
              <option>가격낮은순</option>
            </select>
          </div>
        </div>

        {type !== 'all' && type !== 'best' && (
          <div className="category-sub-filter">
            {currentInfo.filters.map((item) => (
              <button
                key={item.value}
                className={filter === item.value ? 'active' : ''}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        <div className="category-grid">
          {filteredProducts.map((item) => (
            <article
              className="category-card"
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div
                className={`category-img ${item.soldout ? 'soldout' : ''}`}
                style={{
                  backgroundImage: item.soldout ? 'none' : `url(${item.image})`,
                }}
              >
                {item.soldout && <span>Soldout</span>}
              </div>

              <h3>{item.name}</h3>
              <p className="category-old-price">{item.oldPrice}</p>
              <p className="category-price">{item.price}</p>

              <div className="category-bottom">
                <small>★★★★★ 리뷰 0</small>
                <div>
                  <span>♡</span>
                  <span>🛒</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="category-more-btn">더보기</button>
      </section>

      <footer className="campora-footer"></footer>
    </main>
  )
}

export default CategoryPage