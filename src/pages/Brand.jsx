import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Brand.css'

function Brand() {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="brand">
<section className="brand-hero-scroll">
        <div className="brand-main-hero">
          {/* 배경 이미지 어두워지는 효과는 기존 유지 */}
          <div
            className="hero-bg"
            style={{
              filter: `brightness(${Math.max(
                0.35,
                1 - scrollY * 0.0015
              )})`,
            }}
          >
            <img
              src="/images/brand/brand-main.jpg"
              alt="Campora brand main"
            />
          </div>

          <div className="hero-overlay"></div>

          {/* 스크롤이 120px 이상 내려가면 로고에 hide 클래스 추가 */}
          <div className={`hero-logo-text ${scrollY > 120 ? 'hide' : ''}`}>
            <img src="/images/brand/brand-mainlogo.png" alt="Campora logo" />
          </div>

          <div className="hero-copy-window">
            {/* 스크롤이 조금이라도(20px 이상) 내려가면 active 클래스 추가 */}
            <div className={`hero-scroll-copy ${scrollY > 20 ? 'active' : ''}`}>
              <p>
                Campora는 단순한 캠핑용품 브랜드가 아닙니다
                <br /><br /><br />
                우리는 자연 속에서의 '쉼'을
                <br />
                더 많은 사람들이 경험할 수 있도록 돕습니다.
                <br /><br /><br />
                밤하늘 속 고요한 오로라처럼,
                <br />
                바쁜 일상에서 잠시 벗어나
                <br />
                불빛 하나로 충분한 밤을 만드는 것.
                <br /><br /><br />
                그게 Campora가 존재하는 이유입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-story">
        <div className="story-row">
          <div className="story-image">
            <img src="/images/brand/brand-problem-02.jpg" alt="camping" />
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
              무엇을 사야 할지 막막해집니다
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
        </div>

        <div className="story-row reverse">
          <div className="story-image-bottom">
            <img src="/images/brand/brand2-2.png" alt="camping" />
          </div>

          <div className="story-left">
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

              불빛 하나에 둘러앉아 나누는 시간,
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
        </div>
      </section>

      <section className="brand-diff">
        <h2>당신의 쉼을 위한 Campora의 철학</h2>

        <div className="diff-dot">...</div>

        <div className="diff-list">

          <div className="diff-item">
            <img src="/images/brand/brand4-1.jpg" alt="감성 라이프" />

            <h3>
              선택의 무게를 덜고
              <br />
              오롯이 감성만 남도록
            </h3>

            <p>
              당신의 첫 캠핑이 좋은 기억으로 남도록
              <br />
              수많은 장비 대신 꼭 필요한 것만 추천합니다
            </p>
          </div>

          <div className="diff-item">
            <img src="/images/brand/brand4-2.jpg" alt="편안한 구조" />

            <h3>
              분위기만 고르면
              <br />
              캠핑이 완성되도록
            </h3>

            <p>
              불멍, 차박, 미니멀 캠핑까지
              <br />
              원하는 테마를 선택하면 그에 맞는 구성이 따라옵니다
            </p>
          </div>

          <div className="diff-item">
            <img src="/images/brand/brand4-3.jpg" alt="캠핑 감성" />

            <h3>
              제품을 넘어
              <br />
              경험으로 이어지도록
            </h3>

            <p>
              Campora의 큐레이션은 제품에서 끝나지 않습니다
              <br />
              우리 모두의 경험까지 자연스럽게 이어집니다
            </p>
          </div>

        </div>
      </section>

      <section className="brand-video">
        <img src="/images/brand/brand5.jpg" alt="camping video" />
        <div className="play-button">▶</div>
      </section>

      <section className="brand-mood">
        <div className="mood-left">
          <img className="mood-big" src="/images/brand/brand6-1.jpg" alt="camping mood" />
          <img className="mood-wide" src="/images/brand/brand6-3.jpg" alt="night camping" />
        </div>

        <div className="mood-right">
          <img className="mood-small" src="/images/brand/brand6-2.jpg" alt="lantern" />

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


            </p>
            <button
              className="curation-link-btn"
              onClick={() => navigate('/curation')}
            >
              큐레이션 보러가기 →
            </button>
          </div>
        </div>
      </section>

      <section className="offline">
        <h2>오프라인 매장</h2>

        <div className="offline-list">
          <a href="#" className="offline-item">
            <img src="/images/brand/brand7-1.jpg" alt="store" />
            <h3>CAMPORA 영등포 본점</h3>
            <p>
              서울 영등포구
              <br />
              ・ 09:00 ~ 20:00
              <br />
              ・ 02-1234-5678
            </p>
          </a>

          <a href="#" className="offline-item">
            <img src="/images/brand/brand7-2.jpg" alt="store" />
            <h3>CAMPORA 가평점</h3>
            <p>
              경기도 가평
              <br />
              ・ 09:00 ~ 19:00
              <br />
              ・ 031-123-4567
            </p>
          </a>

          <a href="#" className="offline-item">
            <img src="/images/brand/brand7-3.jpg" alt="store" />
            <h3>CAMPORA 강릉점</h3>
            <p>
              강원도 강릉
              <br />
              ・ 10:00 ~ 20:00
              <br />
              ・ 033-123-4567
            </p>
          </a>
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
          <br />
          <br />
          <br />

          <button onClick={() => navigate('/category/all')}>
            캠포라 제품 보기   →
          </button>
        </div>
      </section>


    </main>
  )
}

export default Brand