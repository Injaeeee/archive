import "./Card.css";
import { VideoType } from "./CardList";

type CardType = {
  id: number;
  video: VideoType;
  onBookmarkToggle: () => void;
};

//리액트 아이콘 라이브러리로 북마크 아이콘 고려

export default function Card({ id, video, onBookmarkToggle }: CardType) {
  return (
    <li className="card--container" id={id.toString()}>
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{video.upload_date}</span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark">
            <button onClick={onBookmarkToggle} className="bookmark-button">
              {video.bookmark ? "★" : "☆"}
            </button>
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{video.title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{video.views}</span>
          views
        </div>
      </div>
    </li>
  );
}
