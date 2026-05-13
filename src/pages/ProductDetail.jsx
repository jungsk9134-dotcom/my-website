import './ProductDetail.css'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail({ setCartItems }) {
    const [isSticky, setIsSticky] = useState(false)
    const [activeTab, setActiveTab] = useState('detail')
    const [selectedImage, setSelectedImage] = useState('')
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
    const [reviewRating, setReviewRating] = useState(5)
    const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false)
    const [reviewImages, setReviewImages] = useState([])
    const [openGuide, setOpenGuide] = useState('payment')
    const handleReviewImage = (file) => {
      if (!file) return

      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 첨부할 수 있습니다.')
        return
      }

      const imageUrl = URL.createObjectURL(file)

      setReviewImages((prev) => [...prev, imageUrl])
    }

    const detailRef = useRef(null)
    const reviewRef = useRef(null)
    const guideRef = useRef(null)
    const qaRef = useRef(null)
    const fileInputRef = useRef(null)

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
  useEffect(() => {
  if (product) {
    setSelectedImage(product.image)
  }
}, [product])

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
            <img src={selectedImage || product.image} alt={product.name} />
          </div>
          <div className="thumb-list">
            {[product.image, ...(product.thumbs || [])].map((thumb, index) => (
            <div
              className={`thumb ${selectedImage === thumb ? 'active' : ''}`} key={index}
              onMouseEnter={() => setSelectedImage(thumb)} >
            <img src={thumb} alt={`${product.name} 썸네일 ${index + 1}`} />
            </div>
            ))}
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
        <div className="detail-content-inner">
          {product.detailImages && product.detailImages.length > 0 ? (
            product.detailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} 상세이미지 ${index + 1}`}
                className="detail-page-img"
              />
            ))
          ) : (
            <div className="fake-img">상세페이지 이미지</div>
          )}
        </div>
        </section>
      <section className="review-area" ref={reviewRef}>
      <h3>리뷰</h3>
            
      <div className="review-summary new-review-summary">
        <div className="review-score-box">
          <strong>★★★★★ <span>4.9</span></strong>
        <p>(13)</p>
        </div>
            
        <div className="review-text-box">
          <h4>리뷰 한 눈에 보기</h4>
          <p>
            부드러운 소재와 포근함에 만족한 리뷰가 많았습니다.
            차박이나 캠핑처럼 쌀쌀한 환경에서도 따뜻하게 사용할 수 있다는 의견이 많아요.
          </p>
      </div>
      </div>
            
      {[
        {
          user: 'cozycamp | 26.04.30',
          text: '침낭이 생각보다 훨씬 부드러워서 아이가 정말 좋아하네요. 캠핑할 때도 따뜻하게 사용할 수 있을 것 같아요.',
          img: '/images/review/prod-sm-01-review-01.png',
        },
        {
          user: 'bysora | 26.04.27',
          text: '색감도 예쁘고 두께감도 적당해서 만족스럽습니다. 포근하고 가벼워서 가지고 다니기 좋아요.',
          img: '/images/review/prod-sm-01-review-02.png',
        },
       {
          user: 'sundayfilm | 26.04.24',
          text: '감성 캠핑용으로 정말 잘 어울려요. 사진도 예쁘게 나오고 따뜻해서 만족합니다.',
          img: '/images/review/prod-sm-01-review-03.png',
        },
        {
          user: 'dayoff.zip | 26.04.21',
          text: '촉감이 부드럽고 안감도 좋아요. 겨울 캠핑까지는 아니어도 봄가을에는 충분히 따뜻할 것 같습니다.',
          img: '/images/review/prod-sm-01-review-04.png',
       },
        {
          user: 'aurora | 26.04.18',
          text: '포장도 깔끔하고 색상이 사진이랑 비슷해서 만족합니다. 캠핑 분위기랑 잘 맞아요.',
          img: '/images/review/prod-sm-01-review-05.png',
        },
   ]  .map((review, index) => (
       <div className="review-row new-review-row" key={index}>
          <div className="review-left">
            <strong>★★★★★ <span>5.0</span></strong>
            <p>{review.user}</p>
            <p>{review.text}</p>
          </div>
      
          <img
            src={review.img}
            alt={`리뷰 이미지 ${index + 1}`}
            className="review-img"
          />
       </div>
      ))}
    
      <div className="review-pages">1&nbsp;&nbsp;2&nbsp;&nbsp;3</div>
    
      <button
        className="review-write-btn"
        onClick={() => setIsReviewModalOpen(true)} >
        리뷰 작성하기
      </button>
    </section>

      <section className="info-area" ref={guideRef}>
        <h3>상품 구매 안내</h3>

        <div className="guide-box">
          <div className={`guide-item ${openGuide === 'payment' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'payment' ? '' : 'payment')
              }
            >
              <strong>상품결제정보</strong>
              <span>{openGuide === 'payment' ? '⌃' : '⌄'}</span>
            </button>

            {openGuide === 'payment' && (
              <div className="guide-content">
                <p>
                  고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
                  확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
                  아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
                </p>
                <p>
                  무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹,
                  텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
                </p>
              </div>
            )}
          </div>

          <div className={`guide-item ${openGuide === 'delivery' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'delivery' ? '' : 'delivery')
              }
            >
              <strong>배송정보</strong>
              <span>{openGuide === 'delivery' ? '⌃' : '⌄'}</span>
            </button>

            {openGuide === 'delivery' && (
              <div className="guide-content">
                <p>· 배송 방법 : 택배</p>
                <p>· 배송 지역 : 전국</p>
                <p>· 배송 비용 : 3,000원 / 5만원 이상 무료배송</p>
                <p>· 배송 기간 : 1일 ~ 7일</p>
                <p>
                  고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다.
                  상품 종류에 따라서 배송이 다소 지연될 수 있습니다.
                </p>
              </div>
            )}
          </div>

          <div className={`guide-item ${openGuide === 'return' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'return' ? '' : 'return')
              }
            >
              <strong>교환 및 반품</strong>
              <span>{openGuide === 'return' ? '⌃' : '⌄'}</span>
            </button>

            {openGuide === 'return' && (
              <div className="guide-content">
                <p>
                  교환 및 반품이 가능한 경우<br />
                  -계약내용에 관한 서면을 받은 날부터 7일. 단, 그 서면을 받은 때보다 재화 등의 공급이 늦게 이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날부터 7일 이내<br />
                  -공급받으신 상품 및 용역의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날부터 3개월 이내, 그 사실을 알게 된 날 또는 알 수 있었던 날부터 30일 이내<br />
                  -그외 각 제품의 상세페이지 하단의 각 상품의 교환 및 반품 규정에 따라 진행<br /><br /><br />
                  교환 및 반품이 불가능한 경우<br />
                  -이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우 (단, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다.)<br />
                  -이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우<br />
                  -시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우<br />
                  -복제가 가능한 재화 등의 포장을 훼손한 경우<br />
                  -개별 주문 생산되는 재화 등의 청약철회 시 판매자에게 회복할 수 없는 피해가 예상되어 소비자의 사전 동의를 얻은 경우<br />
                  -디지털 콘텐츠의 제공이 개시된 경우 (단, 가분적 용역 또는 가분적 디지털 콘텐츠로 구성된 계약의 경우 제공이 개시되지 아니한 부분은 청약철회를 할 수 있습니다.)<br />
                  -그외 각 제품의 상세페이지 하단의 각 상품의 교환 및 반품 규정에 따라 진행<br /><br /><br />
                  유의사항<br />
                  고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.<br />
                  (색상 교환, 사이즈 교환 등 포함)
                </p>
              </div>
            )}
          </div>

          <div className={`guide-item ${openGuide === 'service' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'service' ? '' : 'service')
              }
            >
              <strong>서비스문의</strong>
              <span>{openGuide === 'service' ? '⌃' : '⌄'}</span>
            </button>

            {openGuide === 'service' && (
              <div className="guide-content">
                <p>고객센터 : 070-1234-5678</p>
              </div>
            )}
          </div>
        </div>
      </section>

        /* 리뷰 작성 팝업 */
      {isReviewModalOpen && !isPhotoUploadOpen && (
        <div className="review-modal-overlay">
          <div className="review-modal">
            <button
              className="review-modal-close"
              type="button"
              onClick={() => setIsReviewModalOpen(false)}
            >
              ×
            </button>

            <h3>리뷰 작성하기</h3>

            <p className="review-modal-sub">
              사용해본 순간을 자유롭게 남겨주세요
            </p>

            <div className="review-modal-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={star <= reviewRating ? 'active' : ''}
                  onClick={() =>
                    setReviewRating(reviewRating === star ? star - 1 : star)
                  }
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              placeholder="제품의 사용감이나 캠핑에서의 순간을 들려주세요"
            ></textarea>

            <div
              className="review-photo-add"
              onClick={() => setIsPhotoUploadOpen(true)}
            >
              <span>＋</span>

              <div>
                <p>사진 추가</p>
                <small>사진은 1장까지 첨부할 수 있습니다</small>
              </div>
            </div>

            <div className="review-modal-btns">
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
              >
                취소
              </button>

              <button type="button">
                리뷰 남기기
              </button>
            </div>
          </div>
        </div>
      )}

      {isReviewModalOpen && isPhotoUploadOpen && (
        <div className="review-modal-overlay">
          <div className="photo-upload-modal">
            <button
              className="photo-back-btn"
              type="button"
              onClick={() => setIsPhotoUploadOpen(false)}
            >
              ←
            </button>

            <h3>리뷰 작성하기</h3>

            <p className="photo-upload-sub">
              사용해본 순간을 자유롭게 남겨주세요
            </p>

            <div className="photo-upload-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={star <= reviewRating ? 'active' : ''}
                  onClick={() =>
                    setReviewRating(reviewRating === star ? star - 1 : star)
                  }
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              placeholder="제품의 사용감이나 캠핑에서의 순간을 들려주세요"
            ></textarea>
            <div
              className={`review-upload-area ${reviewImages.length > 0 ? 'has-image' : ''}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                handleReviewImage(e.dataTransfer.files[0])
              }}
            >
              {reviewImages.map((img, index) => (
                <div className="review-upload-preview" key={index}>
                  <img src={img} alt={`첨부 이미지 ${index + 1}`} />

                  <button
                    type="button"
                    className="review-image-remove"
                    onClick={() =>
                      setReviewImages((prev) => prev.filter((_, i) => i !== index))
                    }
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="review-upload-plus"
                onClick={() => fileInputRef.current.click()}
              >
                ＋
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  handleReviewImage(e.target.files[0])
                  e.target.value = ''
                }}
              />
            </div>

            <div className="photo-upload-btns">
              <button
                type="button"
                onClick={() => setIsPhotoUploadOpen(false)}
              >
                취소
              </button>

              <button type="button">
                리뷰 남기기
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductDetail