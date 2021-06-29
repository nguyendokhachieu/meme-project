import "./style.scss";
import { useEffect } from "react";

import { useScrollToTop } from "../../hooks/useScrollToTop";

import LatestPostsList from "./LatestPostsList";

export default function Home() {
  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    scrollToTop()
  }, []);
  
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
