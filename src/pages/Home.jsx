import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const categories = [
    {
      name: 'All',
      path: '/category/best',
      icon: '/images/icons/ico-category-every.png',
      activeIcon: '/images/icons/ico-category-every-active.png',
    },
    {
      name: 'Shelter',
      path: '/category/tent',
      icon: '/images/icons/ico-category-shelter.png',
      activeIcon: '/images/icons/ico-category-shelter-active.png',
    },
    {
      name: 'Rest',
      path: '/category/sleep',
      icon: '/images/icons/ico-category-rest.png',
      activeIcon: '/images/icons/ico-category-rest-active.png',
    },
    {
      name: 'Living',
      path: '/category/table-chair',
      icon: '/images/icons/ico-category-living.png',
      activeIcon: '/images/icons/ico-category-living-active.png',
    },
    {
      name: 'Light',
      path: '/category/lantern',
      icon: '/images/icons/ico-category-fire.png',
      activeIcon: '/images/icons/ico-category-fire-active.png',
    },
  ]

  const reviews = [
    {
      title: '침낭',
      reviewImg: '/images/productreview/review1.png',
      thumbImg: '/images/productreview/thumb1.png',
      text: '원단이 자극적이지 않고 부드러워서 아이가 좋아하네요. 자기 침대 같다고 꿀잠...',
      user: 'cozycamp',
    },
    {
      title: '접이식 화로대',
      reviewImg: '/images/productreview/review2.png',
      thumbImg: '/images/productreview/thumb2.png',
      text: '설치 10초 컷, 불멍 초보라면 더욱 추천해요! 디자인이 예뻐서 사진도 예술로 나옴...',
      user: 'littleforest',
    },
    {
      title: '폼 베개',
      reviewImg: '/images/productreview/review3.png',
      thumbImg: '/images/productreview/thumb3.png',
      text: '캠핑 가서 목 아팠던 분들 무조건 사세요. 집 베개만큼 편해서 깜짝 놀랐습니다.',
      user: 'slowweekend',
    },
    {
      title: '감성 폴딩 박스',
      reviewImg: '/images/productreview/review4.png',
      thumbImg: '/images/productreview/thumb4.png',
      text: '수납력 최고인데 디자인까지 예뻐서 테이블 대용으로 써요. 캠핑 짐 정리가 한결...',
      user: 'monodiary',
    },
  ]

  return (
    <main className="campora-home">
      <section className="hero-section"></section>

      <section className="category-section">
        {categories.map((item) => (
          <div
            className="category-item"
            key={item.name}
            onClick={() => navigate(item.path)}
          >
            <div className="category-circle">
              <img
                src={item.icon}
                alt={item.name}
                className="category-icon default-icon"
              />
              <img
                src={item.activeIcon}
                alt={`${item.name} active`}
                className="category-icon hover-icon"
              />
            </div>

            <p>{item.name}</p>
          </div>
        ))}
      </section>

      <section className="lifestyle-section">
        <h2>
          당신이 꿈꾸는<br />
          캠핑라이프는 무엇인가요?
        </h2>

        <p className="lifestyle-desc">
          캠핑의 순간과 취향에 맞춘 Campora의 큐레이션을 만나보세요
        </p>

        <div className="lifestyle-cards">
          <div className="life-card fire-card">
            <div className="fire-overlay"></div>
            <div className="fire-content">
              <div className="fire-text">
                <h3>
                  장작 소리만 들리는 밤,<br />
                  불빛 하나로 충분한
                </h3>
                <h2>불멍 캠핑</h2>
              </div>

              <Link to="/curation/fire" className="fire-btn">
                Click <span>→</span>
              </Link>
            </div>
          </div>

          <div className="life-card car-card">
            <div className="fire-overlay"></div>
            <div className="fire-content">
              <div className="fire-text">
                <h3>
                  차 안에서 맞이하는 밤,<br />
                  어디든 쉴 수 있는
                </h3>
                <h2>차박 캠핑</h2>
              </div>

              <Link to="/curation/car" className="fire-btn circle-btn">
                →
              </Link>
            </div>
          </div>

          <div className="life-card minimal-card">
            <div className="fire-overlay"></div>
            <div className="fire-content">
              <div className="fire-text">
                <h3>
                  덜어낸 만큼 여유로운 밤,<br />
                  더욱 조용해지는
                </h3>
                <h2>미니멀 캠핑</h2>
              </div>

              <Link to="/curation/minimal" className="fire-btn circle-btn">
                →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="review-title-wrap">
          <h2>제품 후기</h2>
          <p>사용자들의 캠핑 경험 속 Campora 아이템을 함께 둘러보세요</p>
        </div>

        <button className="review-arrow review-prev" type="button">
          ‹
        </button>

        <div className="review-list">
          {reviews.map((review) => (
            <div className="review-card" key={review.title}>
              <img
                className="review-img"
                src={review.reviewImg}
                alt={`${review.title} 후기`}
              />

              <img
                className="product-thumb"
                src={review.thumbImg}
                alt={review.title}
              />

              <h3>{review.title}</h3>
              <p>{review.text}</p>
              <small>{review.user} | ★★★★★</small>
            </div>
          ))}
        </div>

        <button className="review-arrow review-next" type="button">
          ›
        </button>
      </section>
      <section className="campora-story-section">
        <img
          src="/images/logo/story-bg.png"
          alt="campora story background"
          className="story-bg-img"
        />

        <div className="story-overlay"></div>

        <div className="story-content">
          {/* 로고 이미지 */}
          <img
            src="/images/logo/story-logo.png"
            alt="campora logo"
            className="story-logo"
          />

          {/* Header.jsx svg */}
          <div className="story-svg">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1231.91 308.57"
              style={{ enableBackground: 'new 0 0 1231.91 308.57' }}
              xmlSpace="preserve"
            >
              <style>
                {`
                  .st0{filter:url(#Adobe_OpacityMaskFilter);}
                  .st2{mask:url(#SVGID_1_);}
                  path { fill: currentColor; }
                `}
              </style>
              <defs>
                <filter
                  id="Adobe_OpacityMaskFilter"
                  filterUnits="userSpaceOnUse"
                  x="102.73"
                  y="107.28"
                  width="1078.65"
                  height="144.11"
                >
                  <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                  />
                </filter>
              </defs>
              <mask
                maskUnits="userSpaceOnUse"
                x="102.73"
                y="107.28"
                width="1078.65"
                height="144.11"
                id="SVGID_1_"
              >
                <g className="st0">
                  <linearGradient
                    id="SVGID_00000021822378374886370810000008028720424703821193_"
                    gradientUnits="userSpaceOnUse"
                    x1="-128.967"
                    y1="171.6264"
                    x2="1198.6813"
                    y2="171.6264"
                  >
                    <stop offset="0.8069" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="1" style={{ stopColor: '#000000' }} />
                  </linearGradient>
                  <rect
                    x="-128.97"
                    y="-211.37"
                    width="1327.65"
                    height="766"
                    style={{
                      fill: 'url(#SVGID_00000021822378374886370810000008028720424703821193_)',
                      stroke: '#000000',
                      strokeWidth: '0.9688',
                      strokeMiterlimit: 10,
                    }}
                  />
                </g>
              </mask>
              <g className="st2">
                <g>
                  <path d="M424.3,124.24c5.89-4.36,10.92-9.13,16.82-12.23c12.62-6.64,25.9-5.92,38.53-0.05c10.76,5,15.97,14.76,16.57,26.16
                          c0.91,17.11,0.79,34.29,0.98,51.44c0.08,6.89,0.08,13.72,6.17,19.86c-10.17,0-19.23,0-29.35,0c7.61-9.05,5.49-19.3,5.64-29.13
                          c0.16-10.83,0.16-21.66-0.03-32.49c-0.07-3.62-0.6-7.32-1.55-10.82c-3.38-12.41-13.47-18.77-27.17-17.43
                          c-13.03,1.27-22.27,9.81-22.61,22.37c-0.49,18.3-0.35,36.62,0.1,54.92c0.1,4.16,2.62,8.25,4.12,12.68c-8.79,0-18.1,0-28.46,0
                          c8.56-9.26,5.59-20.11,5.87-30.35c0.31-11.32-0.07-22.66,0.08-33.99c0.32-24.45-20.79-28.99-36-23.51
                          c-9.4,3.39-13.29,11.55-13.5,20.94c-0.4,17.49-0.43,35,0.09,52.48c0.14,4.84,2.77,9.62,4.31,14.62c-8.7,0-17.91,0-27.97,0
                          c9.06-12.81,5.03-26.93,5.64-40.43c0.5-11.14,0.13-22.32,0.1-33.49c-0.03-8.91,1.06-18.09-7.34-26.38
                          c8.64,0,15.68-0.11,22.72,0.15c0.78,0.03,1.99,2.06,2.11,3.26c0.31,2.93,0.1,5.92,0.1,10.18c9.08-11.44,20.33-15.78,33.47-15.45
                          C406.95,107.86,417.64,112.97,424.3,124.24z" />
                  <path d="M856.29,136.75c0-6.03-0.14-12.07,0.13-18.09c0.05-1.11,1.58-2.6,2.78-3.14c17.59-8,35.88-10.16,54.47-4.61
                          c16.54,4.93,25.72,17.66,26.66,35.37c0.48,8.98,0.52,17.98,0.95,26.96c0.68,14.17,8.09,23.22,21.74,26.96
                          c15.2,4.16,30,1.88,44.72-2.51c20.99-6.26,39.68-17.19,58.04-28.7c20.2-12.66,42.1-20.04,65.86-21.05
                          c15.18-0.65,30.24,1.28,44.87,5.74c1.71,0.52,3.31,1.4,4.88,3.22c-1.76,0-3.55,0.25-5.26-0.04c-24.92-4.23-49.68-3.18-73.4,5.37
                          c-14.78,5.33-28.69,13.19-42.77,20.36c-18.73,9.54-37.57,18.78-58,24.07c-15.91,4.11-32.05,5.74-48.44,2.59
                          c-10.98-2.12-19.94-7.19-26.39-16.92c-0.94,0.77-1.74,1.27-2.36,1.94c-15.29,16.51-41.97,22.05-62.52,12.96
                          c-12.64-5.59-18.63-17.82-15.32-31.13c1.91-7.67,7.02-12.73,13.56-16.5c8.25-4.75,17.3-6.85,26.74-7.2
                          c9.98-0.37,19.97-0.5,29.96-0.71c5.38-0.11,5.97-0.84,5.43-6.21c-2.75-27.61-25.73-31.58-44.9-24.97
                          c-6.92,2.39-12.46,6.95-16.84,12.86c-0.94,1.27-1.97,2.46-2.96,3.69C857.35,136.95,856.82,136.85,856.29,136.75z M923.07,169.94
                          c0-2.07-0.14-3.75,0.03-5.4c0.44-4.33-1.32-6.05-5.73-5.74c-4.65,0.33-9.4-0.32-13.97,0.33c-9.16,1.32-18.45,2.51-27.27,5.14
                          c-6.77,2.02-10.55,7.71-10.88,15.26c-0.37,8.25,2.35,15.07,9.91,18.65c12,5.67,24.05,4.51,35.39-2.11
                          C920.62,190.18,925.15,181.33,923.07,169.94z" />
                  <path d="M542.71,198.78c1.37,17.64-3.81,35.27,3.24,52.61c-8.13,0-16.58,0-25.61,0c7.43-11.97,4-25.01,4.21-37.55
                          c0.47-27.3,0.16-54.62,0.14-81.92c-0.01-7.58,1.24-15.47-5.81-21.48c0.29-0.38,0.58-0.75,0.87-1.13c6.88,0,13.76-0.1,20.62,0.16
                          c0.68,0.03,1.72,2.18,1.84,3.41c0.27,2.96,0.09,5.96,0.09,10.37c10.9-11.8,23.44-16.81,38.42-15.48
                          c14.7,1.3,27.43,6.26,36.81,18.3c15.09,19.37,14.81,50.32-1.16,68.58c-9.44,10.79-21.72,16.37-36.01,17.02
                          C566.38,212.3,553.74,208.5,542.71,198.78z M542.37,160.91c0.01,0,0.01,0,0.02,0c0,5.99-0.56,12.05,0.19,17.94
                          c0.52,4.05,2.1,8.44,4.53,11.67c11.93,15.88,47.07,16.75,57.95-8.73c4.01-9.39,4.42-19.01,3.6-28.86
                          c-1.74-21.07-17.71-35.88-38.12-34.88c-15.04,0.74-29.3,10.29-28.21,28.88C542.6,151.58,542.37,156.25,542.37,160.91z" />
                  <path d="M757.41,160.27c0.63,26.94-18.15,47.21-46.9,50.8c-11.77,1.47-23.24,0.84-34.48-3c-23.94-8.17-37.82-31.22-33.87-56.19
                          c4.26-26.92,23.09-43.52,51.34-44.34c8.72-0.25,17.74,0.41,26.21,2.4C743.77,115.58,757.4,134.34,757.41,160.27z M738.97,159.52
                          c-1.11-5.68-1.54-11.6-3.46-17c-5.02-14.11-14.88-23.31-30.05-25.21c-14.27-1.79-27.66,0.89-36.42,13.55
                          c-10.85,15.67-11.26,32.72-3.68,49.86c5.91,13.37,16.79,20.57,31.24,21.44c14.98,0.9,27.34-4.24,35.6-17.62
                          C736.95,176.82,738.02,168.38,738.97,159.52z"/>
                  <path d="M323.28,208.99c-16.29,3.8-21.68,0.93-26.1-13.07c-4.94,3.23-9.62,6.95-14.84,9.58c-14.17,7.15-29.09,8.16-44.09,3.11
                          c-10.63-3.58-18.21-10.57-19.42-22.43c-1.31-12.79,4.58-21.7,15.71-27.56c8.46-4.46,17.62-5.91,26.99-6.27
                          c10.31-0.39,20.64-0.42,30.96-0.64c0.96-0.02,1.91-0.21,2.78-0.32c3.31-18.8-8.49-33.21-26.93-33.6
                          c-15.94-0.34-28.63,5.08-36.7,19.43c-0.24,0.43-0.58,0.8-0.91,1.16c-0.09,0.1-0.31,0.1-1.7,0.47c0-7.08-0.11-13.9,0.13-20.7
                          c0.03-0.89,1.66-2.03,2.78-2.55c18.56-8.55,37.85-10.5,57.34-4.39c15.35,4.81,23.85,17.64,24.11,33.75
                          c0.22,13.48,0.3,26.97,0.66,40.45C314.25,194.04,315.4,202.45,323.28,208.99z M283.01,158.97c0,0.01,0,0.02,0,0.04
                          c-2.33,0-4.71-0.33-6.97,0.06c-9.1,1.57-18.39,2.65-27.18,5.29c-8.03,2.41-11.57,9.42-11.25,17.58
                          c0.34,8.54,4.67,15.17,13.07,17.59c5.29,1.53,11.12,2.05,16.65,1.78c17.77-0.87,28.59-12.53,28.66-30.15
                          c0.05-12.28,0.05-12.28-11.97-12.17C283.68,158.97,283.34,158.97,283.01,158.97z"/>
                  <path d="M205.25,179.19c0,4.91,0.13,9.83-0.1,14.74c-0.05,1.12-1.11,2.39-2.02,3.23c-20.25,18.71-62.08,19.48-83.05,1.43
                          c-16.26-14-20.17-32.18-15.54-52.13c4.82-20.81,19.32-32.6,39.69-36.9c17.08-3.6,34.06-2.34,50.59,3.76
                          c4.15,1.53,6.1,3.83,5.67,8.5c-0.44,4.72-0.1,9.51-0.7,14.83c-9.96-15.99-24.83-20.68-42.14-19.41
                          c-10.51,0.77-19.61,4.89-26.45,13.3c-13.73,16.89-11.74,47.92,4.28,61.7c11,9.47,24.09,11.38,38.01,9.11
                          C187.53,199.04,197.8,191.36,205.25,179.19z"/>
                  <path d="M799.93,209.62c-8.24,0-17.44,0-27.65,0c9.36-10.69,5.91-23.08,6.33-34.78c0.38-10.65,0.21-21.32,0.03-31.98
                          c-0.19-11.13,1.74-22.7-7.07-33.07c8.45,0,15.78,0,23.62,0c0,3.9,0,7.99,0,13.55c2.47-2.58,3.86-4.33,5.54-5.75
                          c10.62-8.97,22.81-11.87,36.42-9.23c2.95,0.57,4.33,2.01,4.21,5.08c-0.14,3.78-0.03,7.57-0.03,12.4c-2.02-1.15-3.35-1.9-4.67-2.66
                          c-12.11-7.01-34.16-4.63-39.42,13.1c-1.07,3.63-1.72,7.53-1.72,11.3c-0.02,15.49-0.01,30.99,0.65,46.45
                          C796.38,199.2,798.58,204.3,799.93,209.62z"/>
                </g>
              </g>
        </svg>
          </div>

          <p className="story-sub">
            불빛 아래의 대화와<br />
            고요한 밤의 휴식까지
          </p>

          <p className="story-desc">
            Campora는 오래 머물고 싶은 순간을 만듭니다
          </p>

          <Link to="/brand" className="story-btn">
            Campora의 이야기
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home