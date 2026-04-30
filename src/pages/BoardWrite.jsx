import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BoardWrite() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Firebase 연결 전이라 아직 저장은 안 됩니다.')
    navigate('/board')
  }

  return (
    <main className="write-page">
      <h2>글쓰기</h2>

      <form className="write-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="write-buttons">
          <button type="button" onClick={() => navigate('/board')}>
            취소
          </button>
          <button type="submit">
            등록
          </button>
        </div>
      </form>
    </main>
  )
}

export default BoardWrite