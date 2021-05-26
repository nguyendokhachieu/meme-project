import SearchCategoriesUpload from "./SearchCategoriesUpload";
import ListCategoriesUpload from "./ListCategoriesUpload";
import { useState } from "react";

export default function CategoriesUpload({
  categoriesList = function() {},
}) {
  const [selectedCategoriesList, setSelectedCategoriesList] = useState([]);

  return (
    <div className="tags-list">
      <h4 
        className="tags-list-title" 
        title="Chọn danh mục có liên quan đến bài viết này"
      >
        Chọn danh mục có liên quan đến bài viết này
      </h4>
      <SearchCategoriesUpload />
      <ListCategoriesUpload 
        categoriesList={ list => { 
          categoriesList(list); 
          setSelectedCategoriesList(list); 
          } 
        } 
      />
    </div>
  );
}
