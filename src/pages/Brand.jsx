import "./Brand.css";

function Brand() {
  return (
    <main className="brand">
      <section className="brand-hero">
        <h1>Campora의 정체성은 감성캠핑</h1>
        <p>홈 · 브랜드 · 감성 · 캠핑 · 브랜드 스토리</p>
      </section>

      <section className="brand-intro">
        <h2>Campora는 단순한 캠핑용품 브랜드가 아닙니다</h2>
        <p>자연 속 쉼과 감성을 연결하는 브랜드입니다.</p>
      </section>

      <section className="brand-story">
        <div className="box"></div>

        <div className="story-text">
          <p>
            Campora는 자연 속에서의 경험을 통해 삶의 질을 높이는 브랜드입니다.
            <br />
            복잡한 일상에서 벗어나 자연과 함께하는 순간을 더욱 특별하게 만들어드립니다.
            <br />
            우리는 캠핑을 단순한 야외 활동이 아닌 감성적인 라이프스타일로 생각합니다.
          </p>
        </div>

        <div className="story-text left">
          <p>
            | 브랜드 철학
            <br />
            자연과의 조화
            <br />
            감성적인 디자인
            <br />
            편안한 사용성
            <br />
            오래 머무는 캠핑 경험
          </p>
        </div>

        <div className="box"></div>
      </section>

      <section className="brand-diff">
        <h2>Campora만의 차별화</h2>

        <div className="diff-list">
          <div className="diff-item">
            <div></div>
            <h3>감성 라이프</h3>
            <p>일상에서 벗어나 자연 속 쉼 제공</p>
          </div>

          <div className="diff-item">
            <div></div>
            <h3>편안한 구조</h3>
            <p>누구나 쉽게 사용할 수 있는 설계</p>
          </div>

          <div className="diff-item">
            <div></div>
            <h3>캠핑 감성</h3>
            <p>공간의 분위기를 완성하는 디자인</p>
          </div>

          <div className="diff-item">
            <div></div>
            <h3>지속성</h3>
            <p>함께 오래 사용할 수 있는 구성</p>
          </div>
        </div>
      </section>

      <section className="offline">
        <h2>오프라인 매장</h2>

        <div className="offline-list">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="brand-banner">
        <h2>
          불빛 하나로 충분한 밤
          <br />
          캠핑의 문화를 새롭게
          <br />
          Campora는 그 안의 온도를 지킵니다.
        </h2>
        <p>자연 속 감성을 위한 브랜드입니다.</p>
      </section>

      <footer className="brand-footer">
        상단어와 연결되는 밤의 캠핑 감성과 아련한 분위기 이미지
      </footer>
    </main>
  );
}

export default Brand;