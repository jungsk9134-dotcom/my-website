import './ProductDetail.css'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail({ setCartItems }) {
    const [isSticky, setIsSticky] = useState(false)
    const [activeTab, setActiveTab] = useState('detail')

    const detailRef = useRef(null)
    const reviewRef = useRef(null)
    const guideRef = useRef(null)
    const qaRef = useRef(null)

    const scrollToSection = (ref, tabName) => {
      setActiveTab(tabName)

      if (!ref.current) return

      const headerHeight = 120
      const tabHeight = 70
      const extraGap = 20
      const targetTop =
        ref.current.offsetTop - headerHeight - tabHeight - extraGap

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      })
    }
useEffect(() => {
  const handleScroll = () => {
    const tabs = document.querySelector('.sticky-tabs')

    if (!tabs) return

    const top = tabs.getBoundingClientRect().top

    if (top <= 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }

    const scrollPosition = window.scrollY + 220

    const detailTop = detailRef.current?.offsetTop || 0
    const reviewTop = reviewRef.current?.offsetTop || 0
    const guideTop = guideRef.current?.offsetTop || 0
    const qaTop = qaRef.current?.offsetTop || 0

    if (scrollPosition >= qaTop) {
      setActiveTab('qa')
    } else if (scrollPosition >= guideTop) {
      setActiveTab('guide')
    } else if (scrollPosition >= reviewTop) {
      setActiveTab('review')
    } else if (scrollPosition >= detailTop) {
      setActiveTab('detail')
    }
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) return <div>상품 없음</div>

  /* 카테고리 이름 변경 */
  const categoryNameMap = {
    tent: '텐트 · 타프',
    sleep: '침낭 · 매트',
    'table-chair': '테이블 · 의자',
    lantern: '랜턴 · 화로',
}

const breadcrumbCategory =
  categoryNameMap[product.category] || '전체상품'

  const handleAddCart = () => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)

      if (exists) {
        return prev
      }

      return [...prev, product]
    })
  }

  return (
    <main className="detail-page">
      <div className="detail-breadcrumb">
        홈 &gt; 제품보기 &gt; {breadcrumbCategory}
      </div>

      <section className="detail-top">
        <div className="detail-left">
          <div className="detail-img">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="thumb-list">
            <div className="thumb active">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="thumb"></div>
            <div className="thumb"></div>
            <div className="thumb">
              <img src={product.thumb2} alt="썸네일" />
            </div>
          </div>
        </div>

        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="rating">★★★★★ 5.0 리뷰 10</p>

          <div className="price-box">
            <span className="old">{product.oldPrice}</span>
            <div className="sale-price">
              <span className="sale">50%</span>
              <span className="price">{product.price}</span>
            </div>
          </div>

          <div className="delivery-row">
            <span>배송방법</span>
            <span>택배</span>
          </div>

          <div className="select-row">
            <label>사이즈</label>
            <select>
              <option>선택</option>
            </select>
          </div>

          <div className="select-row">
            <label>색상</label>
            <select>
              <option>선택</option>
            </select>
          </div>

          <div className="selected-product">
            <button className="remove-btn">×</button>
            <p>{product.name}</p>
            <span>옵션1</span>
            <span>옵션2</span>

            <div className="selected-bottom">
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <strong>{product.oldPrice}</strong>
            </div>
          </div>

          <div className="total">
            <span>총 상품 금액</span>
            <strong>{product.oldPrice}</strong>
          </div>

          <div className="btns">
            <button onClick={handleAddCart}>장바구니</button>
            <button>바로구매</button>
          </div>
        </div>
      </section>

      <section className={`detail-tabs sticky-tabs ${isSticky ? 'fixed-left' : ''}`}>
        <span
          className={activeTab === 'detail' ? 'active' : ''}
          onClick={() => scrollToSection(detailRef, 'detail')}
        > 
          제품상세
        </span>
        <span
          className={activeTab === 'review' ? 'active' : ''}
          onClick={() => scrollToSection(reviewRef, 'review')}
        >
          리뷰
        </span>
        <span
          className={activeTab === 'guide' ? 'active' : ''}
          onClick={() => scrollToSection(guideRef, 'guide')}
        >
          구매안내
        </span>
        <span
          className={activeTab === 'qa' ? 'active' : ''}
          onClick={() => scrollToSection(qaRef, 'qa')}
        >
          Q&A
        </span>
      </section>
      <section className="detail-content" ref={detailRef}>
        <div className="fake-img">상세페이지 이미지</div>
      </section>

      <section className="review-area" ref={reviewRef}>
        <h3>리뷰</h3>

        <div className="review-summary">
          <div>
            <p>만족도</p>
            <strong>
              ★★★★★
              <br />
              5.0
            </strong>
          </div>
          <div>
            <p>리뷰수</p>
            <strong>nn</strong>
          </div>
        </div>

        {[1, 2, 3, 4, 5].map((item) => (
          <div className="review-row" key={item}>
            <div>
              <strong>★★★★★ 5.0</strong>
              <p>q**** | 26.04.30</p>
              <p>리뷰 내용입니다</p>
            </div>
            <div className="review-thumb"></div>
          </div>
        ))}

        <div className="review-pages">1&nbsp;&nbsp;2&nbsp;&nbsp;3</div>
      </section>

      <section className="info-area" ref={guideRef}>
        <h3>상품 구매 안내</h3>

        <div className="info-row open">
          <div>
            <strong>상품결제정보</strong>
            <p>
              고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
              확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
              아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
            </p>
          </div>
          <span>⌃</span>
        </div>

        <div className="info-row">
          <strong>배송정보</strong>
          <span>⌄</span>
        </div>

        <div className="info-row">
          <strong>교환 및 반품</strong>
          <span>⌄</span>
        </div>

        <div className="info-row">
          <strong>서비스문의</strong>
          <span>⌄</span>
        </div>
      </section>

      <section className="qa-area" ref={qaRef}>
        <h3>Q&A</h3>
        <p>게시글이 없습니다</p>
        <button>상품 문의하기</button>
      </section>
    </main>
  )
}

export default ProductDetail