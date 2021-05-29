import CategoriesList from "../CategoriesList";
import CategoriesListByUser from "../CategoriesListByUser";
import "./style.scss";

export default function Categories({
  loading
}) 
{
  return (
    <div className="main-content">
      <div className="container">
        <section className="categories-page">
          <div className="col-wrap">
            <CategoriesList loading={ loading } />
            <CategoriesListByUser />
          </div>
        </section>
      </div>
    </div>
  );
}
