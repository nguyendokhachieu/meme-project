import CategoriesList from "../CategoriesList";
import CategoriesListByUser from "../CategoriesListByUser";
import "./style.css";

export default function Categories() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <CategoriesList />
          <CategoriesListByUser />
        </div>
      </div>
    </div>
  );
}
