import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <h1>MainPage</h1>
      <Link to="articles">Articles </Link>
      <Link to="posts">Posts</Link>
    </>
  );
}

export default MainPage;
