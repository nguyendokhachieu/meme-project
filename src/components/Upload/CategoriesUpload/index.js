import SearchCategoriesUpload from "./SearchCategoriesUpload";
import ListCategoriesUpload from "./ListCategoriesUpload";

export default function CategoriesUpload({
  categoriesList = function() {},
}) {
  return (
    <div className="tags-list">
      <h4 className="tags-list-title">Chọn ít nhất 1 danh mục có liên quan</h4>
      <SearchCategoriesUpload />
      <ListCategoriesUpload categoriesList={ list => { categoriesList(list) } } />
    </div>
  );
}
