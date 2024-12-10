/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import { useState } from "react";
import "./PostPage.css";
import CardList from "../components/CardList";

export default function PostPage() {
  const [sort, setSort] = useState<string>("upload_date");

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value); // 정렬 기준을 상태로 업데이트
  };

  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type" onChange={handleSort} value={sort}>
          <option value="upload_date">최근등록순</option>
          <option value="views">조회순</option>
        </select>
      </div>
      <div className="section">
        <CardList sortBy={sort} />
      </div>
    </div>
  );
}
