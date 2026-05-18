import './Curation.css'
import { Link } from 'react-router-dom'

function Curation() {
  return (
    <main className="curation-page">

<div className="curation-hero-wrap">

  {/* sticky 영상 */}
  <section className="curation-hero">

    <video
      className="curation-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="/images/curation/curation-test.mp4"
        type="video/mp4"
      />
    </video>

    <div className="curation-hero-dark"></div>

    <div className="curation-hero-text">
      <h2>캠핑을 고르는 가장 쉬운 방법</h2>
    </div>

  </section>

  {/* 영상 위로 올라오는 콘텐츠 */}
  <div className="curation-content">

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
          원하는 분위기를 먼저 떠올려 보세요
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
          장작 소리만 들리는 밤,<br />
          불빛 하나로 충분한 <br /><br />
          <p>불멍 캠핑</p>
        </h3>
      </div>

      <Link to="/curation/fire" className="curation-link">
        Click →
      </Link>
    </section>

    <section className="curation-card car-card">
      <div className="curation-card-text">
        <h3>
          차 안에서 맞이하는 밤,<br />
          어디로든 갈 수 있는 <br /><br />
          <p>차박 캠핑</p>
        </h3>
      </div>

      <Link to="/curation/car" className="curation-link">
        Click →
      </Link>
    </section>

    <section className="curation-card minimal-card">
      <div className="curation-card-text">
        <h3>
          덜어낸 만큼 여유로운 밤,<br />
          더욱 조용해지는 <br /><br />
          <p>미니멀 캠핑</p>
        </h3>
      </div>

      <Link to="/curation/minimal" className="curation-link">
        Click →
      </Link>
    </section>

  </div>
</div>





    </main>
  )
}

export default Curation