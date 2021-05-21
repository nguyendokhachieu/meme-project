import "./style.css";
import LatestPostsList from "./LatestPostsList";
import UserPostsList from "./UserPostsList";

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <LatestPostsList />
          <UserPostsList />
        </div>
      </div>
    </div>
  );
}
