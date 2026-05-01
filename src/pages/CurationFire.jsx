import './CurationFire.css'

function CurationFire() {
  const products = [1, 2, 3, 4]

  return (
    <main className="fire-page">
      <section className="fire-hero">
        <div>
          <h2>
            장작 소리만 들리는 밤,<br />
            불빛 하나로 충분한 캠핑
          </h2>
          <p>큐레이션 이유 / 불멍에 대한 감상 내용</p>
        </div>
      </section>

      <section className="fire-products">
        <h3>불멍 캠핑을 위한 제품 리스트 추천</h3>
        <p>#1~2인용 #불멍</p>

        <div className="fire-product-list">
          {products.map((item) => (
            <article className="fire-product-card" key={item}>
              <div className="fire-product-img"></div>
              <h4>Name</h4>
              <p className="old-price">29,000</p>
              <p className="price">24,000</p>
              <small>★★★★★ 리뷰 0</small>
              <div className="fire-icons">♡ 🛒</div>
            </article>
          ))}
        </div>
      </section>

      <section className="fire-story">
        <h3>캠피 **님</h3>
        <h2>제목</h2>

        <div className="fire-wide-img"></div>
        <p>불멍이 매력적인 이유</p>

        <div className="fire-wide-img second"></div>
        <p>이미지 + 텍스트 스토리텔링 들어갈 예정입니다</p>
      </section>

      <footer className="campora-footer"></footer>
    </main>
  )
}

export default CurationFire