import "./style.css";
import LatestPostsList from "./LatestPostsList";

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <LatestPostsList />
          <div className="main-col-4">
          </div>
        </div>
      </div>
    </div>
  );
}
