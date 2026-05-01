import './Curation.css'
import { Link } from 'react-router-dom'

function Curation() {
  return (
    <main className="curation-page">
      <section className="curation-hero">
        <div>
          <h2>
            장작 소리만 들리는 밤,<br />
            불빛 하나로 충분한 캠핑
          </h2>
          <p>큐레이션 이유 / 불멍에 대한 감상 내용</p>
        </div>
      </section>

      <section className="curation-card">
        <h3>
          불을 바라보는 것만으로 충분한 여행<br />
          불멍의 매력
        </h3>
        <Link to="/curation/fire" className="curation-link">
          큐레이션 보러가기 →
        </Link>
      </section>

      <section className="curation-card">
        <h3>
          차만 들고 훌쩍 떠나는<br />
          감성 가득 차박 캠핑
        </h3>
        <button>큐레이션 보러가기 →</button>
      </section>

      <section className="curation-card">
        <h3>
          극강의 미니멀리즘<br />
          미니멀캠핑
        </h3>
        <button>큐레이션 보러가기 →</button>
      </section>

      <footer className="campora-footer"></footer>
    </main>
  )
}

export default Curation