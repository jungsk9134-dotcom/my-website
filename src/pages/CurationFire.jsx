import './CurationFire.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CurationFire() {
  const [showCartPopup, setShowCartPopup] = useState(false)
  function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  )
}
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('products')
  const [showSideButtons, setShowSideButtons] = useState(false)
  useEffect(() => {
  const handleScroll = () => {
    const productsSection = document.querySelector('.fire-products')
    const storySection = document.querySelector('.fire-story')
    if (!productsSection || !storySection) return
    const productsTop =
      productsSection.getBoundingClientRect().top
    const storyTop =
      storySection.getBoundingClientRect().top
    /* 제품영역 도착하면 버튼 등장 */
    if (productsTop <= 120) {
      setShowSideButtons(true)
    } else {
      setShowSideButtons(false)
    }
    /* 활성화 색상 변경 */
    if (storyTop <= window.innerHeight / 2) {
      setActiveSection('people')
    } else {
      setActiveSection('products')
    }
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  const products1 = [
  {
    id: 1,
    detailId: 20,
    name: '화로',
    originPrice: '89,000',
    price: '59,000',
    discount: 33,
    image: '/images/curation-1/prod1.png',
  },
  {
    id: 2,
    detailId: 21,
    name: '장작',
    originPrice: '19,000',
    price: '12,000',
    discount: 20,
    image: '/images/curation-1/prod2.png',
  },
  {
    id: 3,
    name: '랜턴',
    originPrice: '49,000',
    price: '39,000',
    discount: 15,
    image: '/images/curation-1/prod3.png',
  },
  {
    id: 4,
    name: '체어',
    originPrice: '79,000',
    price: '59,000',
    discount: 25,
    image: '/images/curation-1/prod4.png',
  },
]

  const products2 = [
  {
    id: 5,
    name: '테이블',
    originPrice: '89,000',
    price: '69,000',
    discount: 22,
    image: '/images/curation-1/prod5.png',
  },
  {
    id: 6,
    name: '담요',
    originPrice: '39,000',
    price: '29,000',
    discount: 25,
    image: '/images/curation-1/prod6.png',
  },
  {
    id: 7,
    name: '아이스박스',
    originPrice: '129,000',
    price: '99,000',
    discount: 23,
    image: '/images/curation-1/prod7.png',
  },
]

  const products3 = [
  {
    id: 8,
    detailId: 9,
    name: '윈터브리즈 캠핑침낭',
    originPrice: '69,000',
    price: '89,000',
    discount: 25,
    image: '/images/curation-1/prod8.png',
  },
  {
    id: 9,
    name: '텐트',
    originPrice: '329,000',
    price: '259,000',
    discount: 21,
    image: '/images/curation-1/prod9.png',
  },
]
  const handleAddAllToCart = () => {
  const allProducts = [
    ...products1,
    ...products2,
    ...products3,
  ]

  const savedCart =
    JSON.parse(localStorage.getItem('cartItems')) || []

  const mergedCart = [...savedCart]

  allProducts.forEach((newItem) => {
    const existItem = mergedCart.find(
      (item) => item.id === newItem.id
    )

    if (!existItem) {
      mergedCart.push({
        ...newItem,
        quantity: 1,
      })
    }
  })

  localStorage.setItem(
    'cartItems',
    JSON.stringify(mergedCart)
  )
  window.dispatchEvent(
  new Event('cartUpdated')
)
  navigate('/cart')
}
const handleAddToCart = (e, product) => {
  e.stopPropagation()

  const savedCart =
    JSON.parse(localStorage.getItem('cartItems')) || []

  const existItem = savedCart.find((item) => item.id === product.id)

  let updatedCart

  if (existItem) {
    updatedCart = savedCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
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

  localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  window.dispatchEvent(
  new Event('cartUpdated')
)
  setShowCartPopup(true)
}
  const ProductCard = ({ item }) => (
    <article className="fire-product-card">

      <Link to={`/product/${item.detailId}`}>
        <img src={item.image} alt={item.name} />
      </Link>

      <div className="product-info">
        <h4>{item.name}</h4>
        <div className="price-wrap">
  <span className="origin-price">
    {item.originPrice}
  </span>

  <div className="sale-row">
    <em>{item.discount}%</em>

    <strong className="sale-price">
      {item.price}
    </strong>
  </div>
</div>

        <div className="product-bottom">
          <small>★ 4.8&nbsp;&nbsp;(20)</small>
          <div className="fire-icons">
  <span>♡</span>
  <button
  className="cart-icon-btn"
  onClick={(e) => handleAddToCart(e, item)}
>
  <CartIcon />
</button>
</div>
        </div>
      </div>
    </article>
  )

  return (
    <main className="fire-page">
      <section className="fire-hero">
        <img
          src="/images/curation-1/curationup.png"
          alt="불멍 캠핑"
          className="fire-hero-img"
        />

        <div className="fire-hero-dark"></div>

        <div className="fire-hero-text">
          <h2>
            장작 소리만 들리는 밤,<br />
            불빛 하나로 충분한
          </h2>
          <p>불멍 캠핑</p>
        </div>
      </section>

      <section className="fire-products">
        <div className="section-mark"></div>
        <h3>불빛을 만들 첫 걸음</h3>
        <p className="section-sub">
          불멍의 온기를 중심으로,<br />
          주변의 분위기까지 자연스럽게 이어주는 아이템들을 담았습니다
        </p>
    
        {showSideButtons && (
          <div className="side-buttons">
            <button
              className={activeSection === 'products' ? 'active' : ''}
              onClick={() =>
                document.querySelector('.fire-products')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
          Products
          </button>

    <button
      className={activeSection === 'people' ? 'active' : ''}
      onClick={() =>
        document.querySelector('.fire-story')?.scrollIntoView({
          behavior: 'smooth',
        })
      }
    >
      People
    </button>
  </div>
)}

        <div className="fire-product-list four">
          {products1.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="section-mark"></div>
        <h3 className="product-title">오래 있어도 편안하게</h3>
        <p className="section-sub">
          천천히 불빛을 바라보는 시간 곁에,<br />
          오래 머무를 수 있는 여유를 함께 담았습니다
        </p>

        <div className="fire-product-list three">
          {products2.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="section-mark"></div>
        <h3 className="product-title">밤까지, 머물 당신을 위해</h3>
        <p className="section-sub">
          차가운 밤공기 속에서도 따뜻하게 쉬어갈 수 있도록,<br />
          밤의 온기를 더해주는 제품을 모았습니다
        </p>

        <div className="fire-product-list two">
          {products3.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <button
  className="more-btn"
  onClick={handleAddAllToCart}
>
  전체 구성 담기
</button>
      </section>

      <section className="fire-story">
        <div className="story-top">
          <img
           src="/images/curation-1/curationicon.png"
           alt="people icon"
           className="story-top-icon"
          />
        
          <p className="story-brand">Campora People</p>

          <span className="story-small-text">
            서연님의 캠핑 이야기
          </span>
        </div>
                
        <h3 className="story-main-title">
          불빛을 바라보는 시간 하나로 충분했던 하루
        </h3>

        <article className="story-block">
          <img
            src="/images/curation-1/curationfire1.jpg"
            alt="불멍 캠핑"
          />
        
          <h4>"오늘 하루도 정신없이 보내진 않았나요?"</h4>
          <p>바쁘게 지내다 보면<br />
            문득 아무것도 하지 않고 싶은 순간이 생기고는 하죠.<br /><br />
            최근 매일 보던 모니터 대신,<br />
            멍하니 불만 바라보는 시간을 한 번 가져보고 싶다는 생각이 들더라고요.<br /><br />
            아무것도 하지 않는 시간이<br />
            어쩌면 저에게 필요했었던 것 같아요.<br /><br />
            오히려 그런 순간들이 더 오래 기억에 남지 않을까 싶었어요.
          </p>
        </article>

        <article className="story-grid">
          <img src="/images/curation-1/curationfire2-1.jpg" alt="장작" />
          <img src="/images/curation-1/curationfire2-2.jpg" alt="아이스박스" />
        </article>

        <article className="story-block text-only">
          <p>
            막상 준비하려고 하니까 생각보다 챙겨야 할 게 많더라고요.<br />
            화로부터 의자,조명까지 하나둘씩 늘어나고요.<br />
            처음이다 보니 이 선택이 맞는지 계속 고민하게 되기도 했어요.<br /><br />
            작은 차이로도 분위기가 달라질 것 같다는 생각 때문에<br />
            오히려 더 신중해지기도 했고요.<br /><br />
            그러다 Campora를 알게 됐는데,<br />
            불멍에 맞는 구성이 이미 정리되어 있어서<br /><br />
            복잡하게 고민하지 않고<br />
            그대로 따라 준비하면 될 것 같다는 생각이 들었습니다.
          </p>
        </article>

        <article className="story-grid">
          <img src="/images/curation-1/curationfire3-1.jpg" alt="음식과 불멍" />
          <img src="/images/curation-1/curationfire3-2.jpg" alt="사람들과 불멍" />
        </article>

        <article className="story-block text-only">
          <p>
            캠핑장에 도착해서 차근차근 세팅을 시작했는데,<br />
            조립 과정도 복잡하지 않아서<br /><br />
            어두워지기 전에, 여유 있게 준비를 마칠 수 있었습니다.
          </p>
        </article>

        <article className="story-grid">
          <img src="/images/curation-1/curationfire4-1.jpg" alt="밤 캠핑" />
          <img src="/images/curation-1/curationfire4-2.jpg" alt="불멍 캠핑" />
        </article>

        <article className="story-block text-only">
          <p>
            불을 바라보고 있는 시간이 이렇게 편안할 줄은 몰랐어요.<br /><br />
            말이 많지 않아도 충분했고,<br />
            그저 불이 타는 소리와 빛만으로도 시간이 흘러가더라고요.<br /><br />
            의자도 오래 앉아있기에 부담 없었고<br />
            조명은 불빛을 해치지 않게 은은하게 유지돼서<br />
            그 분위기를 그대로 살려주는 점이 좋았어요.<br /><br />
            준비에 신경을 덜 쓰니까<br />
            그 순간 자체에 더 집중할 수 있었던 것 같다요.
          </p>
        </article>

        <article className="story-block">
          <img src="/images/curation-1/curationfire5.jpg" alt="텐트와 불멍" />
          <p>
            시간이 자나고 보니<br />
            무언가를 많이 했던 하루라기보다,<br />
            잠시 조용히 머물다 온 기억에 더 가까웠던 것 같아요.<br /><br />
            텐트 안으로 들어온 밤공기와<br />
            천천히 잦아드는 불빛까지도 분위기의 일부처럼 느껴졌고,<br />
            그래서인지 캠핑의 시간이 더 기게 남았습니다.<br /><br />
            그리고 시작이 어렵게 느껴질 뿐이지,<br />
            캥핑은 생각보다 훨씬 단순하고 편안한 취미라는 걸 알게 됐어요.<br />
            한번 경험하고 나니 다음엔 더 가벼운 마음으로 불을 보러 나갈 수 있을 것 같아요.
          </p>
        </article>
      </section>

      <footer className="campora-footer"></footer>
      {showCartPopup && (
  <div className="cart-popup-overlay">
    <div className="cart-popup">
      <p>장바구니로 이동하시겠습니까?</p>

      <div className="cart-popup-buttons">
        <button onClick={() => setShowCartPopup(false)}>
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

export default CurationFire