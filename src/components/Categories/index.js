import "./style.scss";

import { useEffect, useState } from "react";

import { useWindowSize } from "../../hooks/useWindowSize";

import CategoriesList from "../CategoriesList";
import CategoriesListByUser from "../CategoriesListByUser";

import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function Categories({
  loading
}) 
{
  const { width } = useWindowSize();
  const [tab, setTab] = useState('general');
  const [hidden, setHidden] = useState(false);
  const { scrollToTop } = useScrollToTop();

  const handleTabClick = which => setTab(which);

  useEffect(() => {
    if (width <= 992) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [width]);

  useEffect(() => {
    scrollToTop();
  });

  return (
    <div className="main-content">
      <div className="container">
        <section className="categories-page">
          <div className="categories-tab-mobile">
            <div 
              onClick={ () => { handleTabClick('general') } } 
              className={ tab === 'general' ? 'tab-item active' : 'tab-item' }
            >
              Danh mục hiện có
            </div>
            <div 
              onClick={ () => { handleTabClick('yourself') } } 
              className={ tab === 'yourself' ? 'tab-item active' : 'tab-item' }
            >
              Quản lý danh mục của bạn
            </div>
          </div>
          <div className="col-wrap">
            <CategoriesList 
              hidden={ !hidden ? false : ('yourself' === tab) } 
              loading={ loading } 
            />
            <CategoriesListByUser hidden={ !hidden ? false : 'general' === tab } />
          </div>
        </section>
      </div>
    </div>
  );
}
