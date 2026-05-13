import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Brand.css'


function Brand() {
  const navigate = useNavigate()
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
      <section className="brand-message">
        <img
          src="/images/brand/logonob.png"
          alt="brand icon"
        />

        <h2>Campora는 단순한 캠핑용품 브랜드가 아닙니다</h2>

        <p>자연 속 쉼과 감성을 전달하는 브랜드</p>
      </section>
      <section className="brand-story">
        <div className="story-row">
          <div className="story-image">
            <img src="/images/brand/brand-problem-02.jpg" alt="camping" />
          </div>

          <div className="story-text">
            <h2>"당신의 모든 캠핑 순간을 위해"</h2>
            <p>
              Campora는 단순히 캠핑용품을 판매하는 곳이 아닙니다.<br /><br />
              우리는 자연 속에서의 시간, 그 안에서 느껴지는 쉼과 감성을<br />
              더 많은 사람들과 나누고자 시작되었습니다.<br /><br />
              바쁜 일상에서 벗어나,<br />
              불빛 하나에 둘러앉아 나누는 대화,<br />
              고요한 밤공기와 별빛 아래에서의 휴식.<br /><br />
              Campora는 그런 순간들을 더 쉽고, 더 편안하게 경험할 수 있도록 돕는 브랜드입니다.<br /><br />
              우리는 실용성과 감성을 모두 담은 제품을 큐레이션합니다.<br /><br />
              처음 캠핑을 시작하는 사람부터,<br />
              자신만의 스타일을 완성해가는 캠퍼까지<br />
              각자의 방식으로 자연을 즐길 수 있도록 다양한 선택지를 제공합니다.<br /><br />
              Campora와 함께, 당신만의 캠핑을 완성해보세요.
            </p>
          </div>
        </div>

        <div className="story-row reverse">
          <div className="story-image-bottom">
            <img src="/images/brand/brand2-2.png" alt="camping" />
          </div>

          <div className="story-left">
            <h2>"복잡한 시작은 덜어내고, 캠핑의 본질만 남기다"</h2>

            <p>1. 초보 캠퍼의 현실<br /><br />
              설렘보다 먼저 마주하는 복잡함<br />
              캠핑을 시작하는 순간, 우리는 자연보다 먼저 수많은 선택지 앞에 서게 됩니다.<br /><br />
              텐트, 침낭, 의자, 테이블, 랜턴까지 무엇이 꼭 필요한지,<br />
              어떤 기준으로 골라야 하는지조차 쉽지 않습니다.<br /><br />
              2. 시장 문제<br /><br />
              선택은 많지만, 기준이 부족했습니다.<br />
              기존의 캠핑 시장은 수많은 제품으로 가득하지만<br />
              초보자의 시선에서 쉽고 직관적으로 정리된 경험은 부족했습니다.<br /><br />
              3. 우리가 발견한 인사이트<br /><br />
              캠핑의 본질은 더 단순하고 편안해야 합니다.<br />
              CAMPORA는 캠핑의 시작이 어려워서는 안 된다고 생각했습니다.<br /><br />
              복잡한 선택은 줄이고,<br />
              당신의 첫 캠핑이 조금 더 쉽고 특별해질 수 있도록.<br /><br />
              CAMPORA는 캠핑의 시작을 가장 편안하고 감각적으로 바꿉니다.
            </p>
          </div>
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

          <button onClick={() => navigate('/category/all')}>
            캠포라 제품 보기 →
          </button>
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