const posts = [
  {
    id: 1,
    title: '공지 [공지] 회원 가입하고 30,000원 쿠폰 받기',
    author: '플라리스',
    date: '2025-03-28 15:13:12',
    views: 5390,
  },
  {
    id: 2,
    title: '공지 (종료)[플라리스타트] 2025년의 시작',
    author: '플라리스',
    date: '2025-02-19 14:39:27',
    views: 863,
  },
  {
    id: 3,
    title: '공지 플라리스 새만금 오토&레저 캠핑쇼 in',
    author: '플라리스',
    date: '2024-09-27 10:40:45',
    views: 607,
  },
  {
    id: 4,
    title: '공지 하계 휴무 배송안내',
    author: '플라리스',
    date: '2024-08-14 17:36:25',
    views: 78,
  },
  {
    id: 5,
    title: '공지 신제품 & 재입고 소식✨',
    author: '플라리스',
    date: '2024-07-25 19:50:27',
    views: 141,
  },
]

function Board() {
  return (
    <main className="board-page">
      <section className="board-header">
        <h2>공지사항</h2>
        <p>공지사항입니다.</p>
      </section>

      <section className="board-list">
        {posts.map((post) => (
          <div className="board-row" key={post.id}>
            <strong className="board-title">{post.title}</strong>

            <div className="board-info">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>조회 {post.views}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Board