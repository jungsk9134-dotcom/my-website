import './CurationCar.css'
import { useNavigate } from 'react-router-dom'

function CurationCar() {
    const navigate = useNavigate()
  return (
    <main>
        <button className="back-btn" onClick={() => navigate(-1)}>
  ← 뒤로가기
</button>
      <h1>🚗 차박 캠핑</h1>
      <p>차박 큐레이션 페이지 준비중입니다.</p>
    </main>
  )
}

export default CurationCar