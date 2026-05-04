import "./Search.css";
import { Search as SearchIcon, ShoppingCart, Heart } from "lucide-react";

function Search() {
  const products = [
    { name: "상품명", desc: "OO% / 테이블기기", price: "₩ 46,000" },
    { name: "상품명", desc: "OO% / 테이블기기", price: "₩ 46,000" },
    { name: "상품명", desc: "OO% / 테이블기기", price: "₩ 46,000" },
    { name: "상품명", desc: "OO% / 테이블기기", price: "₩ 46,000" },
  ];

  return (
    <div className="page">
      <main>
        <div className="breadcrumb">홈 &gt; 검색</div>

        <section className="search-section">
          <h2>상품 검색</h2>

          <div className="search-box">
            <input type="text" />
            <SearchIcon size={20} />
          </div>
        </section>

        <div className="line" />

        <section className="product-area">
          <div className="product-top">
            <p>전체 46개</p>

            <div className="filter">
              <span>우측옵션</span>
              <button>□</button>
              <button>정렬</button>

              <select>
                <option>인기순</option>
                <option>가격낮은순</option>
                <option>가격높은순</option>
              </select>
            </div>
          </div>

          <div className="product-list">
            {products.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="image-box"></div>

                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <strong>{item.price}</strong>

                  <div className="card-icons">
                    <Heart size={13} />
                    <ShoppingCart size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default Search;