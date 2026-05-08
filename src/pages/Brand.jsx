import { useEffect } from 'react'
import './Brand.css'

function Brand() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="brand">
      <section className="brand-main-hero">
        <img src="/images/brand/brand-main.jpg" alt="Campora brand main" />
          <div className="hero-logo-text">
            <img src="/images/brand/brandg.png" alt="Campora logo" />
          </div>

          <div className="hero-desc">
            <p>
              Campora는 단순한 캠핑용품 브랜드가 아닙니다
              <br /><br />
              우리는 자연 속에서의 쉼을
              <br />
              더 많은 사람들이 경험할 수 있도록 돕습니다.
              <br /><br />
              밤하늘 속 고요한 오로라처럼,
              <br />
              바쁜 일상에서 잠시 벗어나
              <br />
              쉼과 여유를 선물하는 브랜드입니다.
              <br /><br />
              그게 Campora가 존재하는 이유입니다.
            </p>
          </div>
        </section>
      <section className="brand-story">
        <div className="story-image">
          <img src="/images/brand/brand1.png" alt="camping" />
        </div>

        <div className="story-text">
          <h2>
            캠핑의 시작은,
            <br />
            생각보다 어렵습니다
          </h2>
          <p>
            낭만으로 가득한 시간을 기대하지만,
            <br />
            막상 준비하려고 하면
            <br />
            무엇을 사야 할지 막막합니다.
            <br /><br />
            바쁜 일상에서 벗어나
            <br />
            잠시 쉬어가고 싶었던 순간마저,
            <br />
            준비의 부담 속에서 가벼워지지 못합니다
            <br /><br />
            캠핑은 설레는 경험이어야 하는데,
            <br />
            그 시작은 늘 쉽지 않습니다
          </p>
        </div>

        <div className="story-text story-left">
          <h2>
            Campora는
            <br />
            그 복잡함을 줄입니다
          </h2>
          <p>
            우리는 더 많은 제품을 보여주기보다,
            <br />
            정말 필요한 것만 남기는 선택을 합니다
            <br /><br />
            불빛 하나에 둘러 앉아 나누는 시간,
            <br />
            고요한 밤공기와 그 안의 작은 여유까지
            <br /><br />
            당신이 기대했던 그 순간에
            <br />
            더 온전히 집중할 수 있도록
            <br /><br />
            기준을 대신 고민하고,
            <br />
            감성과 경험만을 남겼습니다
          </p>
        </div>

        <div className="story-image">
          <img src="/images/brand/brand2-2.png" alt="camping" />
        </div>
      </section>

      <section className="brand-diff">
        <h2>당신의 쉼을 위한 Campora의 철학</h2>

        <div className="diff-list">
          <div className="diff-item">
            <img src="/images/brand/brand4-1.jpg" alt="감성 라이프" />
            <h3>감성 라이프</h3>
            <p>자연 속에서 편안한 쉼을 제공합니다.</p>
          </div>

          <div className="diff-item">
            <img src="/images/brand/brand4-2.jpg" alt="편안한 구조" />
            <h3>편안한 구조</h3>
            <p>누구나 쉽게 사용할 수 있는 설계입니다.</p>
          </div>

          <div className="diff-item">
            <img src="/images/brand/brand4-3.jpg" alt="캠핑 감성" />
            <h3>캠핑 감성</h3>
            <p>공간의 분위기를 완성하는 디자인입니다.</p>
          </div>
        </div>
      </section>

      <section className="brand-video">
        <img src="/images/brand/brand5.jpg" alt="camping video" />
        <div className="play-button">▶</div>
      </section>

      <section className="brand-mood">
        <div className="mood-grid">
          <img className="mood-big" src="/images/brand/brand6-1.jpg" alt="camping mood" />
          <img className="mood-small" src="/images/brand/brand6-2.jpg" alt="lantern" />
          <img className="mood-wide" src="/images/brand/brand6-3.jpg" alt="night camping" />
        </div>

        <div className="mood-text">
          <h2>
            Campora의 큐레이션은
            <br />
            혼자 만들어지지 않습니다
          </h2>

          <p>
            우리는 ‘Campora People’과 함께,
            <br />
            자연 속에서의 시간과 그 안의 순간들을 나눕니다
            <br /><br />

            각자의 방식으로 완성된 캠핑의 경험,
            <br />
            그 안에 담긴 작은 디테일과 감정들이 모여
            <br />
            Campora만의 기준이 됩니다
            <br /><br />

            이 이야기들은 또 다른 캠핑으로 이어지고,
            <br />
            누구나 그 흐름 속에서
            <br />
            자신만의 순간을 만들어갈 수 있습니다
            <br /><br />

            큐레이션 보러가기 →
          </p>
          
        </div>
      </section>

      <section className="offline">
        <h2>오프라인 매장</h2>

        <div className="offline-list">
          <div className="offline-item">
            <img src="/images/brand/brand7-1.jpg" alt="store" />
            <h3>Campora 성수점</h3>
            <p>서울 성동구 성수동</p>
          </div>

          <div className="offline-item">
            <img src="/images/brand/brand7-2.jpg" alt="store" />
            <h3>Campora 제주점</h3>
            <p>제주 제주시 애월읍</p>
          </div>

          <div className="offline-item">
            <img src="/images/brand/brand7-3.jpg" alt="store" />
            <h3>Campora 양양점</h3>
            <p>강원 양양군 현남면</p>
          </div>
        </div>
      </section>
      <section className="brand-bottom-banner">
        <img src="/images/brand/brand-outro-bg.jpg" alt="camping banner" />
        <div className="bottom-banner-text">
          <p>
           불빛 하나로 충분한 밤
            <br />
            그 안에도 편안한 시간
            <br />
            혼자여도, 둘이어도 좋은 캠핑
            <br /><br />
            Campora는
            <br />
            그런 순간을 위한 브랜드입니다
          </p>

          <button>캠프라 제품 보기 →</button>
        </div>
      </section>

      <footer className="brand-footer">
        <h2>Campora</h2>

        <div className="footer-links">
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>고객센터</span>
        </div>

        <p>
          캠프라 Campora | 서울특별시 00구 00동 | 대표 : 김OO | 사업자등록 : 02-3456-7890
          <br />
          사업자등록번호 : 123-45-67890 | 통신판매업 신고번호 : 2026-서울양천-0456
        </p>

        <p>© 2026 Campora. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default Brand