import videoData from "../data/posts.json";
import Card from "./Card";
import { useState } from "react";
import "./CardList.css";

export type VideoType = {
  upload_date: string;
  title: string;
  views: number;
  bookmark: boolean;
};

type CardListProps = {
  sortBy: string;
};

export default function CardList({ sortBy }: CardListProps) {
  const [videos, setVideos] = useState<VideoType[]>(videoData);

  const toggleBookmark = (index: number) => {
    const updatedVideos = [...videos];
    updatedVideos[index].bookmark = !updatedVideos[index].bookmark;
    setVideos(updatedVideos);
  };

  videos.sort((a, b) => {
    // 구조분해 할당 ... 스프레드 연산자
    if (a.bookmark !== b.bookmark) {
      return a.bookmark ? -1 : 1; // 북마크된 항목이 최상단
    }
    if (sortBy === "upload_date") {
      const dateA = new Date(a.upload_date).getTime();
      const dateB = new Date(b.upload_date).getTime();
      return dateB - dateA; // 내림차순
    } else if (sortBy === "views") {
      return b.views - a.views; // 조회수 기준 내림차순
    }
    return 0;
  });

  return (
    <div className="card-list">
      {videos.map((video, i) => (
        <Card
          key={i} // index를 사용 x / 1. 직접 json.data에 id를 넣거나 , 2. 다른 title + date
          id={i}
          video={video}
          onBookmarkToggle={() => toggleBookmark(i)}
        />
      ))}
    </div>
  );
}
