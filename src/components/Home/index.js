import "./style.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useScrollToTop } from "../../hooks/useScrollToTop";

import Tabs from "./Tabs";
import LatestPostsList from "./LatestPostsList";
import Suggestions from "./Suggestions";

export default function Home() {
  const { scrollToTop } = useScrollToTop();
  const { homepageTab } = useSelector(state => state.posts);

  useEffect(() => {
    scrollToTop()
  }, []);
  
  return (
    <div className="main-content">
      <div className="container">
        <section className="home-page">
          <div className="col-wrap">
            <div className="main-col-8">
              <Tabs />
              {
                homepageTab !== 'suggestions'  ? <LatestPostsList /> : <Suggestions />
              }
            </div>
            <div className="main-col-4">
              {
                homepageTab === 'suggestions'  ? null : <Suggestions />
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
