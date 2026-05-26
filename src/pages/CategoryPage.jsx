import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import './CategoryPage.css'
import CartIcon from '../components/CartIcon'

const categories = [
  {
    name: 'All',
    path: '/category/all',
    type: 'all',
    icon: '/images/icons/ico-category-every.png',
    activeIcon: '/images/icons/ico-category-every-active.png',
  },
  {
    name: 'Shelter',
    path: '/category/tent',
    type: 'tent',
    icon: '/images/icons/ico-category-shelter.png',
    activeIcon: '/images/icons/ico-category-shelter-active.png',
  },
  {
    name: 'Rest',
    path: '/category/sleep',
    type: 'sleep',
    icon: '/images/icons/ico-category-rest.png',
    activeIcon: '/images/icons/ico-category-rest-active.png',
  },
  {
    name: 'Living',
    path: '/category/table-chair',
    type: 'table-chair',
    icon: '/images/icons/ico-category-living.png',
    activeIcon: '/images/icons/ico-category-living-active.png',
  },
  {
    name: 'Fire',
    path: '/category/lantern',
    type: 'lantern',
    icon: '/images/icons/ico-category-fire.png',
    activeIcon: '/images/icons/ico-category-fire-active.png',
  },
]

const categoryInfo = {
  'table-chair': {
    filters: [
      { label: '전체', value: 'all' },
      { label: '테이블', value: 'table' },
      { label: '의자', value: 'chair' },
      { label: '스토리지', value: 'etc' },
    ],
  },

  sleep: {
    filters: [
      { label: '전체', value: 'all' },
      { label: '침낭', value: 'sleeping' },
      { label: '매트', value: 'mat' },
      { label: '침구소품', value: 'etc' },
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

function getNumberPrice(price) {
  if (!price) return 0
  return Number(String(price).replace(/,/g, ''))
}

function CategoryPage() {
  const navigate = useNavigate()
  const { type } = useParams()

  const [filter, setFilter] = useState('all')
  const [sortType, setSortType] = useState('latest')
  const [showCartPopup, setShowCartPopup] = useState(false)
  const [visibleCount, setVisibleCount] = useState(16)
  const [likedItems, setLikedItems] = useState([])

  const scrollYRef = useRef(null)

  useEffect(() => {
    if (scrollYRef.current !== null) {
      window.scrollTo(0, scrollYRef.current)
      scrollYRef.current = null
    } else {
      window.scrollTo(0, 0)
    }
  }, [type])

  const currentInfo = categoryInfo[type]

  const handleLikeToggle = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    )
  }

  const filteredProducts = products
    .filter((item) => {
      if (type === 'all' || type === 'best') return true

      if (item.category !== type) return false

      if (filter === 'all') return true

      return item.subCategory === filter
    })

    .sort((a, b) => {

      // 최신순
      if (sortType === 'latest') {
        return (a.id || 0) - (b.id || 0)
      }

      // 인기순
      if (sortType === 'popular') {

        const scoreA =
          ((a.rating || 0) * 100) + (a.review || 0)

        const scoreB =
          ((b.rating || 0) * 100) + (b.review || 0)

        return scoreB - scoreA
      }

      // 높은 가격순
      if (sortType === 'highPrice') {
        return getNumberPrice(b.price) - getNumberPrice(a.price)
      }

      // 낮은 가격순
      if (sortType === 'lowPrice') {
        return getNumberPrice(a.price) - getNumberPrice(b.price)
      }

      return 0
    })

  const visibleProducts =
    filteredProducts.slice(0, visibleCount)

  const handleAddToCart = (e, product) => {

    e.stopPropagation()

    const savedCart =
      JSON.parse(localStorage.getItem('cartItems')) || []

    const existItem =
      savedCart.find((item) => item.id === product.id)

    let updatedCart

    if (existItem) {

      updatedCart = savedCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )

    } else {

      updatedCart = [
        ...savedCart,
        {
          ...product,
          quantity: 1,
        },
      ]
    }

    localStorage.setItem(
      'cartItems',
      JSON.stringify(updatedCart)
    )

    window.dispatchEvent(
      new Event('cartUpdated')
    )

    setShowCartPopup(true)
  }

  return (
    <main className="category-page">

      <section className="category-hero">
        <p>
          당신의 첫 캠핑부터, 가장 특별했던 순간까지
          <br />
          Campora와 함께, 당신만의 캠핑을 완성해보세요.
        </p>
      </section>

      <section className="category-menu">

        <div className="category-menu-list">

          {categories.map((item) => (

            <div
              className="category-menu-item"
              key={item.name}
              onClick={() => {

                scrollYRef.current = window.scrollY

                setFilter('all')
                setVisibleCount(16)

                navigate(item.path)
              }}
            >

              <div
                className={
                  type === item.type
                    ? 'category-menu-circle active'
                    : 'category-menu-circle'
                }
              >

                <img
                  src={item.icon}
                  alt={item.name}
                  className="category-icon default-icon"
                />

                <img
                  src={item.activeIcon}
                  alt={item.name}
                  className="category-icon hover-icon"
                />

              </div>

              <p>{item.name}</p>

            </div>
          ))}
        </div>
      </section>

      <section className="category-wrap">

        <div className="category-list-header">

          <div className="category-list-top">

            {currentInfo ? (

              <div className="category-sub-filter">

                {currentInfo.filters.map((item) => (

                  <button
                    key={item.value}
                    className={
                      filter === item.value
                        ? 'active'
                        : ''
                    }
                    onClick={() => {
                      setFilter(item.value)
                      setVisibleCount(16)
                    }}
                  >
                    {item.label}
                  </button>

                ))}
              </div>

            ) : (
              <div className="category-sub-filter empty-filter"></div>
            )}

            <select
              className="category-sort-select"
              value={sortType}
              onChange={(e) => {

                setSortType(e.target.value)
                setVisibleCount(16)

              }}
            >

              <option value="latest">최신순</option>
              <option value="popular">인기순</option>
              <option value="highPrice">높은가격순</option>
              <option value="lowPrice">낮은가격순</option>

            </select>

          </div>

          <p className="category-count">
            총 {filteredProducts.length}개
          </p>

        </div>

        <div className="category-grid">

          {visibleProducts.map((item) => (

            <article
              className="product-card"
              key={item.id}
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
            >

              <div className="product-image-wrap">

                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />

              </div>

              <div className="product-info">

                <h3>{item.name}</h3>

                <div className="product-price-box">

                  <p
                    className={
                      item.discountRate > 0
                        ? 'product-old-price'
                        : 'product-old-price empty'
                    }
                  >

                    {item.discountRate > 0
                      ? `${item.oldPrice}원`
                      : ''}

                  </p>

                  <div
                    className={
                      item.discountRate > 0
                        ? 'product-price-row'
                        : 'product-price-row no-discount'
                    }
                  >

                    {item.discountRate > 0 && (
                      <span className="discount-rate">
                        {item.discountRate}%
                      </span>
                    )}

                    <span className="product-price">
                      {item.price}원
                    </span>

                  </div>

                </div>

                <div className="product-bottom">

                  <div className="review">
                    ★ {item.rating || 0}
                    <span>
                      ({item.review || 0})
                    </span>
                  </div>

                  <div className="product-icons">

                    <button
                      type="button"
                      className="heart-icon-btn"
                      onClick={(e) => {

                        e.stopPropagation()
                        handleLikeToggle(item.id)

                      }}
                    >

                      <img
                        src={
                          likedItems.includes(item.id)
                            ? '/images/icons/ico-heart-aurora.png'
                            : '/images/icons/ico-heart-black.png'
                        }
                        alt="찜하기"
                        className="heart-icon-img"
                      />

                    </button>

                    <button
                      className="cart-icon-btn"
                      onClick={(e) =>
                        handleAddToCart(e, item)
                      }
                    >

                      <CartIcon />

                    </button>

                  </div>

                </div>

              </div>

            </article>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (

          <button
            className="category-more-btn"
            onClick={() =>
              setVisibleCount((prev) => prev + 12)
            }
          >
            + 더보기
          </button>

        )}

      </section>

      {showCartPopup && (

        <div className="cart-popup-overlay">

          <div className="cart-popup">

            <p>
              장바구니로 이동하시겠습니까?
            </p>

            <div className="cart-popup-buttons">

              <button
                onClick={() =>
                  setShowCartPopup(false)
                }
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

export default CategoryPage