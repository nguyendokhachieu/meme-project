import "./style.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList";
import CategoriesListByUser from "../CategoriesListByUser";

export default function Categories({
  loading
}) 
{
  const { width } = useWindowSize();
  const [tab, setTab] = useState('general');
  const [hidden, setHidden] = useState(false);

  const handleTabClick = (which) => {
    setTab(which);
  }

  useEffect(() => {
    if (width <= 992) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [width]);

  return (
    <div className="main-content">
      <div className="container">
        <section className="categories-page">
          <div className="categories-tab-mobile">
            <div 
              onClick={ () => { handleTabClick('general') } } 
              className={ tab === 'general' ? 'item active' : 'item' }
            >
              Danh mục hiện có
            </div>
            <div 
              onClick={ () => { handleTabClick('yourself') } } 
              className={ tab === 'yourself' ? 'item active' : 'item' }
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
