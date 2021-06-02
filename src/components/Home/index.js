import "./style.scss";
import LatestPostsList from "./LatestPostsList";

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <section className="home-page">
          <div className="col-wrap">
            <LatestPostsList />
            <div className="main-col-4"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
