import './ProductDetail.css'
import { useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: '캠핑 테이블',
    price: '15,000원',
    oldPrice: '30,000원',
    image: '/images/products/table1.jpg',
  },
]

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) return <div>상품 없음</div>

  return (
    <main className="detail-page">
      <section className="detail-top">
        <div className="detail-img">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="rating">★★★★★ 5.0 리뷰 1</p>

          <div className="price-box">
            <span className="old">{product.oldPrice}</span>
            <span className="sale">50%</span>
            <span className="price">{product.price}</span>
          </div>

          <div className="select-box">
            <select>
              <option>사이즈 선택</option>
            </select>
            <select>
              <option>색상 선택</option>
            </select>
          </div>

          <div className="total">
            총 상품 금액 <strong>{product.price}</strong>
          </div>

          <div className="btns">
            <button>장바구니</button>
            <button className="buy">바로구매</button>
          </div>
        </div>
      </section>

      <section className="detail-tabs">
        <span className="active">제품상세</span>
        <span>리뷰</span>
        <span>구매안내</span>
        <span>문의</span>
      </section>

      <section className="detail-content">
        <div className="fake-img">상세페이지 이미지</div>
      </section>
      <section className="review-area">
  <h3>리뷰</h3>

  <div className="review-summary">
    <div>
      <p>만족도</p>
      <strong>★★★★★ 5.0</strong>
    </div>
    <div>
      <p>전체 리뷰수</p>
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

<section className="info-area">
  <h3>상품 구매 안내</h3>

  <div className="info-row">
    <div>
      <strong>상품결제정보</strong>
      <p>상품결제정보 내용입니다</p>
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

<section className="qa-area">
  <h3>Q&A</h3>
  <p>게시글이 없습니다</p>
  <button>상품 문의하기</button>
</section>
    </main>
  )
}

export default ProductDetail