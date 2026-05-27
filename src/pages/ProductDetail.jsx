import './ProductDetail.css'
import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { products } from '../data/products'
import { curationProducts } from '../data/curationProducts'

function ProductDetail({ onAddCart }) {
  const [isSticky, setIsSticky] = useState(false)
  const [activeTab, setActiveTab] = useState('detail')
  const [selectedImage, setSelectedImage] = useState('')
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewText, setReviewText] = useState('')
  const [reviewImages, setReviewImages] = useState([])
  const [userReviews, setUserReviews] = useState([])
  const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false)
  const [openGuide, setOpenGuide] = useState('null')
  const [openQaId, setOpenQaId] = useState(null)
  const [isQaModalOpen, setIsQaModalOpen] = useState(false)
  const [showCartPopup, setShowCartPopup] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [qaType, setQaType] = useState('제품 문의')
  const [qaText, setQaText] = useState('')
  const [userQnas, setUserQnas] = useState([])
  const [answerInputs, setAnswerInputs] = useState({})
  const [isEditQaModalOpen, setIsEditQaModalOpen] = useState(false)
  const [editQaId, setEditQaId] = useState(null)
  const [editQaText, setEditQaText] = useState('')
  const [isDeleteQaPopupOpen, setIsDeleteQaPopupOpen] = useState(false)
  const [deleteQaId, setDeleteQaId] = useState(null)

  const detailRef = useRef(null)
  const reviewRef = useRef(null)
  const guideRef = useRef(null)
  const qaRef = useRef(null)
  const fileInputRef = useRef(null)

  const { id } = useParams()
  const navigate = useNavigate()
  const routeId = Number(id)
  const normalProduct = products.find((item) => item.id === routeId)
  const curationProduct = curationProducts.find(
    (item) =>
      item.id === routeId ||
      item.detailId === routeId ||
      item.name === normalProduct?.name
  )

  // 더미 데이터 관련 //
  const dummyReviews = [
    {
      user: 'camper01 | 26.05.12',
      text: '배송도 빠르고 제품 상태도 좋아요.',
      img: '/images/products-dummy/prod-review-dummy-01.png',
      rating: 5,
    },
    {
      user: 'outdoor02 | 26.05.10',
      text: '캠핑장에서 사용하기 편했습니다.',
      img: '/images/products-dummy/prod-review-dummy-02.png',
      rating: 5,
    },
    {
      user: 'forest03 | 26.05.08',
      text: '디자인이 예쁘고 감성 캠핑 느낌이 잘 나요.',
      img: '/images/products-dummy/prod-review-dummy-03.png',
      rating: 4,
    },
    {
      user: 'night04 | 26.05.05',
      text: '생각보다 튼튼하고 마감도 깔끔합니다.',
      img: '/images/products-dummy/prod-review-dummy-04.png',
      rating: 5,
    },
    {
      user: 'camp05 | 26.05.01',
      text: '가성비가 괜찮고 사용하기 편해요.',
      img: '/images/products-dummy/prod-review-dummy-05.png',
      rating: 4,
    },
  ]

  const dummyQnas = [
    {
      id: 1,
      status: '답변 완료',
      title: '배송 문의',
      writer: 'campuser',
      question: '배송은 얼마나 걸리나요?',
      answer: '보통 1~3일 정도 소요됩니다.',
    },
    {
      id: 2,
      status: '답변 완료',
      title: '재입고 문의',
      writer: 'outdoorlife',
      question: '품절되면 재입고 예정 있나요?',
      answer: '현재 재입고 일정 확인 중입니다.',
    },
    {
      id: 3,
      status: '답변 완료',
      title: '제품 문의',
      writer: 'campingday',
      question: '초보 캠핑용으로 사용 가능할까요?',
      answer: '초보자분들도 편하게 사용 가능합니다.',
    },
    {
      id: 4,
      status: '답변 완료',
      title: '기타 문의',
      writer: 'forestcamp',
      question: '실사용 색상 차이가 큰가요?',
      answer: '실제 색상은 상세이미지와 거의 동일합니다.',
    },
  ]
  // 리뷰 갯수 //
  const shuffledReviews = [...dummyReviews]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

  const shuffledQnas = [...dummyQnas]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)

  const dummyDetailData = {
    detailImages: ['/images/products-info/dummy-detail-info.png'],

    reviewSummary: (
      <>
        AI 리뷰 서비스가 제공되는 부분입니다. 해당 서비스는 최근
        6개월 간의 리뷰를 대상으로 제공됩니다.
        <br />
        최근 등록된 제품의 경우 충분한 리뷰가 없어 서비스 제공이
        어려울 수 있습니다.
      </>
    ),

    reviews: shuffledReviews,

    qna: shuffledQnas,
  }
  
  const baseProduct = {
    ...(normalProduct || {}),
    ...(curationProduct || {}),
  }

  const product = {
    ...baseProduct,

    reviewSummary:
      baseProduct.reviewSummary || dummyDetailData.reviewSummary,

    reviews:
      baseProduct.reviews && baseProduct.reviews.length > 0
        ? baseProduct.reviews
        : dummyDetailData.reviews,

    qna:
      baseProduct.qna && baseProduct.qna.length > 0
        ? baseProduct.qna
        : dummyDetailData.qna,

    detailImages:
      baseProduct.detailImages && baseProduct.detailImages.length > 0
        ? baseProduct.detailImages
        : dummyDetailData.detailImages,
  }

  const reviews = [...userReviews, ...(product?.reviews || [])]
  const qnas = [...userQnas, ...(product?.qna || [])]

  const reviewsPerPage = 5
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)
  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  )

  useEffect(() => {
    if (!product?.id) return

    window.scrollTo(0, 0)

    setSelectedImage(product.image)

    const savedReviews =
      JSON.parse(localStorage.getItem(`reviews-${product.id}`)) || []

    const savedQnas =
      JSON.parse(localStorage.getItem(`qnas-${product.id}`)) || []

    setUserReviews(savedReviews)
    setUserQnas(savedQnas)
    setCurrentPage(1)
    setActiveTab('detail')
  }, [id])

  useEffect(() => {
    const handleScroll = () => {
      const tabs = document.querySelector('.sticky-tabs')
      if (!tabs) return

      const top = tabs.getBoundingClientRect().top
      setIsSticky(top <= 0)

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

  if (!product) return <div>상품 없음</div>

  const handleReviewImage = (file) => {
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 첨부할 수 있습니다.')
      return
    }

    const imageUrl = URL.createObjectURL(file)
    setReviewImages([imageUrl])
  }

  const handleSubmitReview = () => {
    if (reviewText.trim() === '') {
      alert('리뷰 내용을 입력해주세요.')
      return
    }

    const today = new Date()
    const dateText = `${String(today.getFullYear()).slice(2)}.${String(
      today.getMonth() + 1
    ).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`

    const newReview = {
      user: `campora | ${dateText}`,
      text: reviewText,
      img: reviewImages[0] || product.image,
      rating: reviewRating,
    }

    const updatedReviews = [newReview, ...userReviews]

    setUserReviews(updatedReviews)
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedReviews))

    setReviewText('')
    setReviewImages([])
    setReviewRating(5)
    setIsReviewModalOpen(false)
    setIsPhotoUploadOpen(false)
    setCurrentPage(1)
    setActiveTab('review')
  }

  const handleSubmitQa = () => {
    if (qaText.trim() === '') {
      alert('문의 내용을 입력해주세요.')
      return
    }

    const newQa = {
      id: Date.now(),
      status: '처리 대기',
      title: qaType,
      writer: 'campora',
      question: qaText,
      answer: '',
      isUserQa: true,
    }

    const updatedQnas = [newQa, ...userQnas]

    setUserQnas(updatedQnas)
    localStorage.setItem(`qnas-${product.id}`, JSON.stringify(updatedQnas))

    setQaText('')
    setQaType('제품 문의')
    setIsQaModalOpen(false)
    setOpenQaId(newQa.id)
    setActiveTab('qa')
  }

  const handleSubmitQaAnswer = (qaId) => {
    const answerText = answerInputs[qaId]

    if (!answerText || answerText.trim() === '') {
      alert('답변 내용을 입력해주세요.')
      return
    }

    const updatedQnas = userQnas.map((qa) =>
      qa.id === qaId
        ? {
            ...qa,
            status: '답변 완료',
            answer: answerText,
          }
        : qa
    )

    setUserQnas(updatedQnas)
    localStorage.setItem(`qnas-${product.id}`, JSON.stringify(updatedQnas))

    setAnswerInputs((prev) => ({
      ...prev,
      [qaId]: '',
    }))
  }

  const handleDeleteQa = (qaId) => {
    if (!window.confirm('문의글을 삭제하시겠습니까?')) return

    const updatedQnas = userQnas.filter((qa) => qa.id !== qaId)

    setUserQnas(updatedQnas)
    localStorage.setItem(`qnas-${product.id}`, JSON.stringify(updatedQnas))
    setOpenQaId(null)
  }

  const handleEditQa = (qaId) => {
    const currentQa = userQnas.find((qa) => qa.id === qaId)

    if (!currentQa) return

    setEditQaId(qaId)
    setEditQaText(currentQa.question)
    setQaType(currentQa.title || '제품 문의')
    setIsEditQaModalOpen(true)
  }

  const handleSubmitEditQa = () => {
    if (editQaText.trim() === '') {
      alert('문의 내용을 입력해주세요.')
      return
    }

    const updatedQnas = userQnas.map((qa) =>
      qa.id === editQaId
        ? {
            ...qa,
            title: qaType,
            question: editQaText,
            status: '처리 대기',
            answer: '',
          }
        : qa
    )

    setUserQnas(updatedQnas)
    localStorage.setItem(`qnas-${product.id}`, JSON.stringify(updatedQnas))

    setIsEditQaModalOpen(false)
    setEditQaId(null)
    setEditQaText('')
  }

  const handleDeleteQaAnswer = (qaId) => {
    if (!window.confirm('답변을 삭제하시겠습니까?')) return

    const updatedQnas = userQnas.map((qa) =>
      qa.id === qaId
        ? {
            ...qa,
            status: '처리 대기',
            answer: '',
          }
        : qa
    )

    setUserQnas(updatedQnas)
    localStorage.setItem(`qnas-${product.id}`, JSON.stringify(updatedQnas))
  }

  const handleCartClick = () => {
    if (onAddCart) {
      onAddCart({
        ...product,
        quantity,
        selectedSize,
        selectedColor,
      })
    }

    setShowCartPopup(true)
  }

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

  const categoryNameMap = {
    tent: '텐트 · 타프',
    sleep: '침낭 · 매트',
    'table-chair': '테이블 · 의자',
    lantern: '랜턴 · 화로',
  }

  const breadcrumbCategory = categoryNameMap[product.category] || '전체상품'
  const priceNumber = Number(
  String(product.price || 0).replace(/[^0-9]/g, '')
)

  return (
    <main className="detail-page">
      <section className="detail-top">
        <div className="detail-left">
          <div className="detail-breadcrumb">
            <Link to="/">홈</Link>
            <span> &gt; </span>
            <Link to="/category/all">제품 보기</Link>
            <span> &gt; </span>
            <Link to={`/category/${product.category}`}>
              {breadcrumbCategory}
            </Link>
          </div>

          <div className="detail-img">
            <img src={selectedImage || product.image} alt={product.name} />
          </div>

          <div className="thumb-list">
            {[product.image, ...(product.thumbs || [])]
              .filter(Boolean)
              .map((thumb, index) => (
                <div
                  className={`thumb ${selectedImage === thumb ? 'active' : ''}`}
                  key={index}
                  onClick={() => setSelectedImage(thumb)}
                >
                  <img src={thumb} alt={`${product.name} 썸네일 ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-info-top">
            <h2>{product.name}</h2>

            <p className="rating">
              ★★★★★ {product.rating || '4.9'} 리뷰 {reviews.length}
            </p>

            <div className="price-box">
              <span className="old">{product.oldPrice}</span>

              <div className="sale-price">
                <span className="sale">20%</span>
                <span className="price">
                  {product.price || '0원'}
                </span>
              </div>
            </div>

            <div className="delivery-row">
              <span>배송비</span>
              <span>
                3,000원 <small>(5만원 이상 무료배송)</small>
              </span>
            </div>

              {product.sizes && (
                <div className="select-row">
                  <label>사이즈</label>

                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">[필수] 옵션을 선택해 주세요.</option>

                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            {product.colors && (
              <div className="select-row">
                <label>컬러</label>

                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">[필수] 옵션을 선택해 주세요.</option>

                  {product.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="selected-product">
            <button className="remove-btn">×</button>

            <p className="selected-product-name">{product.name}</p>

              <div className="selected-option-lines">
                <span className={product.sizes ? '' : 'empty-option'}>
                  - 사이즈 {selectedSize || '선택'}
                </span>

                <span className={product.colors ? '' : 'empty-option'}>
                  - 컬러 {selectedColor || '선택'}
                </span>
              </div>

            <div className="selected-bottom">
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                >
                  -
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>

              <strong>
                {(priceNumber * quantity).toLocaleString()}원
                </strong>
              </div>
            </div>

            <div className="detail-info-bottom">
              <div className="total">
                <span>총 상품 금액</span>

                <div>
                  <strong>
                    {(priceNumber * quantity).toLocaleString()}원
                  </strong>
                  <em>&nbsp; ({quantity}개)</em>
                </div>
              </div>

            <div className="btns">
              <button className="cart-btn" onClick={handleCartClick}>
                장바구니
              </button>

              <button className="buy">
                바로 구매
              </button>
            </div>
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
            <strong>
              ★★★★★ <span>{product.rating || '4.9'}</span>
            </strong>
            <p>({reviews.length})</p>
          </div>

          <div className="review-divider"></div>

          <div className="review-text-box">
            <h4>리뷰 한 눈에 보기</h4>
            <p>{product.reviewSummary || '아직 등록된 리뷰 요약이 없습니다.'}</p>
          </div>
        </div>

        {currentReviews.map((review, index) => (
          <div className="review-row new-review-row" key={index}>
            <div className="review-left">
              <strong>
                {'★'.repeat(review.rating || 5)}
                {'☆'.repeat(5 - (review.rating || 5))}
                <span> {(review.rating || 5).toFixed(1)}</span>
              </strong>
              <p>{review.user}</p>
              <p>{review.text}</p>
            </div>

            {review.img && (
              <img
                src={review.img}
                alt={`리뷰 이미지 ${index + 1}`}
                className="review-img"
              />
            )}
          </div>
        ))}

        {totalPages > 0 && (
          <div className="review-pages">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        <button
          className="review-write-btn"
          onClick={() => setIsReviewModalOpen(true)}
        >
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
                setOpenGuide(openGuide === 'payment' ? null : 'payment')
              }
            >
              <strong>상품결제정보</strong>
              <span>{openGuide === 'payment' ? '⌃' : '⌄'}</span>
            </button>

            {openGuide === 'payment' && (
              <div className="guide-content">
                <p>
                  고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
                  확인과정에서 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류
                  또는 취소할 수 있습니다.
                </p>
              </div>
            )}
          </div>

          <div className={`guide-item ${openGuide === 'delivery' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'delivery' ? null : 'delivery')
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
              </div>
            )}
          </div>

          <div className={`guide-item ${openGuide === 'return' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'return' ? null : 'return')
              }
            >
              <strong>교환 및 반품</strong>
              <span>{openGuide === 'return' ? '⌃' : '⌄'}</span>
            </button>

            {openGuide === 'return' && (
              <div className="guide-content">
                <p>
                  교환 및 반품은 상품 수령 후 7일 이내 가능합니다.
                  단, 사용 흔적이 있거나 상품 가치가 훼손된 경우 제한될 수 있습니다.
                </p>
              </div>
            )}
          </div>

          <div className={`guide-item ${openGuide === 'service' ? 'active' : ''}`}>
            <button
              type="button"
              className="guide-title"
              onClick={() =>
                setOpenGuide(openGuide === 'service' ? null : 'service')
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

      <section className="qa-area" ref={qaRef}>
        <h3>Q&A</h3>

        <div className="qa-table">
          <div className="qa-head">
            <span>상태</span>
            <span>제목</span>
            <span>작성자</span>
          </div>

          {qnas.map((qa) => (
            <div className="qa-item" key={qa.id}>
              <div className="qa-row">
                <span>{qa.status}</span>

                <span
                  className="qa-title"
                  onClick={() =>
                    setOpenQaId(openQaId === qa.id ? null : qa.id)
                  }
                >
                  {qa.title}
                </span>

                <span>{qa.writer}</span>
              </div>

              <div className={`qa-answer ${openQaId === qa.id ? 'open' : ''}`}>
                <p className="qa-question">{qa.question}</p>

                {qa.isUserQa && (
                  <div className="qa-edit-btns">
                    <button type="button" onClick={() => handleEditQa(qa.id)}>
                      문의 수정
                    </button>

                    <button type="button" onClick={() => handleDeleteQa(qa.id)}>
                      문의 삭제
                    </button>
                  </div>
                )}

                {qa.answer ? (
                  <div className="qa-answer-box">
                    <span className="qa-brand">Campora</span>
                    <p>안녕하세요 {qa.writer}님.</p>
                    <p>{qa.answer}</p>

                    {qa.isUserQa && (
                      <button
                        type="button"
                        className="qa-answer-delete-btn"
                        onClick={() => handleDeleteQaAnswer(qa.id)}
                      >
                        답변 삭제
                      </button>
                    )}
                  </div>
                ) : (
                  qa.isUserQa && (
                    <div className="qa-admin-answer-box">
                      <textarea
                        value={answerInputs[qa.id] || ''}
                        onChange={(e) =>
                          setAnswerInputs((prev) => ({
                            ...prev,
                            [qa.id]: e.target.value,
                          }))
                        }
                        placeholder="답변 내용을 입력해주세요"
                      ></textarea>

                      <button
                        type="button"
                        onClick={() => handleSubmitQaAnswer(qa.id)}
                      >
                        답변 등록하기
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="qa-write-wrap">
          <button
            className="qa-write-btn"
            type="button"
            onClick={() => setIsQaModalOpen(true)}
          >
            상품 문의하기
          </button>
        </div>
      </section>

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
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
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
                onClick={() => {
                  setIsReviewModalOpen(false)
                  setIsPhotoUploadOpen(false)
                  setReviewText('')
                  setReviewImages([])
                  setReviewRating(5)
                }}
              >
                취소
              </button>

              <button type="button" onClick={handleSubmitReview}>
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
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="제품의 사용감이나 캠핑에서의 순간을 들려주세요"
            ></textarea>

            <div
              className={`review-upload-area ${
                reviewImages.length > 0 ? 'has-image' : ''
              }`}
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
                    onClick={() => setReviewImages([])}
                  >
                    ×
                  </button>
                </div>
              ))}

              {reviewImages.length < 1 && (
                <button
                  type="button"
                  className="review-upload-plus"
                  onClick={() => fileInputRef.current.click()}
                >
                  ＋
                </button>
              )}

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
              <button type="button" onClick={() => setIsPhotoUploadOpen(false)}>
                취소
              </button>

              <button type="button" onClick={handleSubmitReview}>
                리뷰 남기기
              </button>
            </div>
          </div>
        </div>
      )}

      {isQaModalOpen && (
        <div className="qa-modal-overlay">
          <div className="qa-modal">
            <button
              className="qa-modal-close"
              type="button"
              onClick={() => {
                setIsQaModalOpen(false)
                setQaText('')
                setQaType('제품 문의')
              }}
            >
              ×
            </button>

            <h3>상품 문의하기</h3>

            <p className="qa-modal-sub">어떤 내용이 궁금한가요?</p>

            <div className="qa-category-list">
              {['제품 문의', '배송 문의', '재입고 문의', '기타'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={qaType === item ? 'active' : ''}
                  onClick={() => setQaType(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <textarea
              value={qaText}
              onChange={(e) => setQaText(e.target.value)}
              placeholder="제품 사용감이나 구성에 대해 궁금한 내용을 남겨주세요"
            ></textarea>

            <div className="qa-modal-btns">
              <button
                type="button"
                onClick={() => {
                  setIsQaModalOpen(false)
                  setQaText('')
                  setQaType('제품 문의')
                }}
              >
                취소
              </button>

              <button type="button" onClick={handleSubmitQa}>
                문의 등록하기
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditQaModalOpen && (
        <div className="qa-modal-overlay">
          <div className="qa-modal">
            <button
              className="qa-modal-close"
              type="button"
              onClick={() => {
                setIsEditQaModalOpen(false)
                setEditQaId(null)
                setEditQaText('')
                setQaType('제품 문의')
              }}
            >
              ×
            </button>

            <h3>상품 문의하기</h3>

            <p className="qa-modal-sub">어떤 내용이 궁금한가요?</p>

            <div className="qa-category-list">
              {['제품 문의', '배송 문의', '재입고 문의', '기타'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={qaType === item ? 'active' : ''}
                  onClick={() => setQaType(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <textarea
              value={editQaText}
              onChange={(e) => setEditQaText(e.target.value)}
              placeholder="제품 사용감이나 구성에 대해 궁금한 내용을 남겨주세요"
            ></textarea>

            <div className="qa-modal-btns">
              <button
                type="button"
                onClick={() => {
                  setIsEditQaModalOpen(false)
                  setEditQaId(null)
                  setEditQaText('')
                  setQaType('제품 문의')
                }}
              >
                취소
              </button>

              <button type="button" onClick={handleSubmitEditQa}>
                문의 등록하기
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductDetail