import './Footer.css'

function Footer() {
  return (
    <footer className="campora-footer">
      <div className="footer-inner">
        <div className="footer-logo">campora⌒</div>

        <div className="footer-info">
          <div className="footer-links">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>고객센터</span>
          </div>

          <p>
            [주]캠포라 | 서울특별시 00구 00동 | 대표 : 김종완 | 문의 : hello@campora.kr | 대표번호 : 02-3456-7890
          </p>
          <p>
            사업자등록번호 : 123-45-67890 | 통신판매업 신고번호 : 2026-서울마포-04568
          </p>

          <small>© 2026 Campora. All rights reserved.</small>
        </div>

        <div className="footer-icons">
          <span>◎</span>
          <span>▶</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer