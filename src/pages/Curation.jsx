import './Curation.css'
import { Link } from 'react-router-dom'

function Curation() {
  return (
    <main className="curation-page">

      <section className="curation-hero">
        <img
          className="curation-hero-img"
          src="/images/curation/curation1.jpg"
          alt="캠핑 메인 이미지"
        />

        <div className="curation-hero-dark"></div>

        <div className="curation-hero-text">
          <h2>캠핑을 고르는 가장 쉬운 방법</h2>
        </div>
      </section>

      <section className="curation-intro">
        <div className="curation-intro-box">
          <img src="/images/curation/curationicon1-1.png" alt="" />
          <h3>선택의 숲, 길을 잃게 되는 우리</h3>
          <p>
            캠핑이 어렵게 느껴지는 이유는<br />
            정보가 부족해서가 아닌<br />
            수많은 선택 속에서<br />
            쉽게 길을 잃기 때문입니다
          </p>
        </div>

        <div className="curation-intro-box">
          <img src="/images/curation/curationicon1-2.png" alt="" />
          <h3>당신이 바라는 캠핑의 모습</h3>
          <p>
            어떤 장비를 고를지 고민하기보다<br />
            어떤 캠핑을 하고 싶은지<br />
            원하는 분위기를 먼저 떠올려 보세요<br />
          </p>
        </div>

        <div className="curation-intro-box">
          <img src="/images/curation/curationicon1-3.png" alt="" />
          <h3>걱정과 고민은 Campora에</h3>
          <p>
            복잡한 준비 과정을 줄이고<br />
            캠핑 그 자체에 집중할 수 있도록<br />
            Campora의 큐레이션이<br />
            그 사이를 채웁니다
          </p>
        </div>
      </section>

      <section className="curation-card fire-card">
        <div className="curation-card-text">
          <h3>
            불을 바라보는 것만으로 충분한 여행<br />
            불멍의 매력
          </h3>
        </div>

        <Link to="/curation/fire" className="curation-link">
          큐레이션 보러가기 →
        </Link>
      </section>

      <section className="curation-card car-card">
        <div className="curation-card-text">
          <h3>
            차만 들고 훌쩍 떠나는<br />
            감성 가득 차박 캠핑
          </h3>
        </div>

        <Link to="/curation/car" className="curation-link">
          큐레이션 보러가기 →
        </Link>
      </section>

      <section className="curation-card minimal-card">
        <div className="curation-card-text">
          <h3>
            극강의 미니멀리즘<br />
            미니멀캠핑
          </h3>
        </div>

        <Link to="/curation/minimal" className="curation-link">
          큐레이션 보러가기 →
        </Link>
      </section>

      <footer className="campora-footer"></footer>

    </main>
  )
}

export default Curation