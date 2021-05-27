import CategoriesList from "../CategoriesList";
import CategoriesListByUser from "../CategoriesListByUser";
import "./style.scss";

export default function Categories() {
  return (
    <div className="main-content">
      <div className="container">
        <section className="categories-page">
          <div className="col-wrap">
            <CategoriesList />
            <CategoriesListByUser />
          </div>
        </section>
      </div>
    </div>
  );
}
