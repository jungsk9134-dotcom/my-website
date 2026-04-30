function Home() {
  return (
    <main className="campora-home">
      <section className="hero-section"></section>

      <section className="category-section">
        {['베스트', '텐트·타프', '침낭·매트', '테이블·의자', '랜턴·화로'].map((item) => (
          <div className="category-item" key={item}>
            <div className="category-circle"></div>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="lifestyle-section">
        <h2>
          당신이 꿈꾸는<br />
          캠핑라이프는 무엇인가요?
        </h2>

        <div className="lifestyle-cards">
          <div className="life-card big">
            <h3>불을 바라보는 것만으로 충분한 여행<br />불멍의 매력</h3>
            <div>
              <p>text</p>
              <button>자세히보기 →</button>
            </div>
          </div>

          <div className="life-card">
            <h3>차만 들고 훌쩍 떠나는<br />감성 가득 차박 캠핑</h3>
            <div>
              <p>text</p>
              <button>자세히보기 →</button>
            </div>
          </div>

          <div className="life-card">
            <h3>극강의 미니멀리즘<br />미니멀캠핑</h3>
            <div>
              <p>text</p>
              <button>자세히보기 →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="review-section">
        <h2>후기</h2>

        <div className="review-list">
          {[1, 2, 3, 4].map((item) => (
            <article className="review-card" key={item}>
              <div className="review-img">
                <span>고객리뷰사진</span>
              </div>
              <div className="product-thumb"></div>
              <h3>제품이름</h3>
              <p>후기 내용<br />후기 내용</p>
              <small>id**** | ★★★★★ 5.0</small>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-text">
          <h2>CAMPORA</h2>
          <p>
            Campora는 단순히 캠핑용품을 판매하는 곳이 아닙니다.<br />
            우리는 자연 속에서의 시간, 그 안에서 느껴지는 쉼과 감성을 더 많은 사람들과 나누고자 시작되었습니다.<br />
            바쁜 일상에서 벗어나, 불빛 하나에 둘러앉아 나누는 대화,<br />
            고요한 밤공기와 별빛 아래에서의 휴식.<br />
            Campora는 그런 순간들을 더 쉽고, 더 편안하게 경험할 수 있도록 돕는 브랜드입니다.
          </p>
        </div>

        <button className="brand-btn">브랜드 스토리 보러가기 →</button>
      </section>

      <footer className="campora-footer"></footer>
    </main>
  )
}

export default Home