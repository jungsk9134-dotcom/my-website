import { useNavigate, useParams } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: '공지 [공지] 회원 가입하고 30,000원 쿠폰 받기',
    author: '플라리스',
    date: '2025-03-28 15:13:12',
    views: 5390,
    content: '회원가입 시 쿠폰을 지급합니다. 많은 참여 바랍니다.',
  },
  {
    id: 2,
    title: '공지 (종료)[플라리스타트] 2025년의 시작',
    author: '플라리스',
    date: '2025-02-19 14:39:27',
    views: 863,
    content: '2025년 이벤트가 종료되었습니다.',
  },
]

function BoardDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const post = posts.find((item) => item.id === Number(id))
  const currentIndex = posts.findIndex((item) => item.id === Number(id))
  const prevPost = posts[currentIndex - 1]
  const nextPost = posts[currentIndex + 1]

  if (!post) {
    return <div style={{ padding: '50px' }}>글을 찾을 수 없습니다.</div>
  }

  return (
    <main className="board-detail">
        <button className="back-btn" onClick={() => navigate('/board')}>
          목록으로
        </button>

      <h2>{post.title}</h2>

      <div className="detail-info">
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>조회 {post.views}</span>
      </div>

      <div className="detail-content">
        {post.content}
      </div>
      <div className="post-nav">
  {prevPost ? (
    <button onClick={() => navigate(`/board/${prevPost.id}`)}>
      이전글: {prevPost.title}
    </button>
  ) : (
    <span>이전글이 없습니다.</span>
  )}

  {nextPost ? (
    <button onClick={() => navigate(`/board/${nextPost.id}`)}>
      다음글: {nextPost.title}
    </button>
  ) : (
    <span>다음글이 없습니다.</span>
  )}
</div>
    </main>
  )
}

export default BoardDetail