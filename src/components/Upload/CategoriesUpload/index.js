import SearchCategoriesUpload from "./SearchCategoriesUpload";
import ListCategoriesUpload from "./ListCategoriesUpload";
import { useState } from "react";

export default function CategoriesUpload({
  categoriesList = function() {},
}) 
{
  const [sQuery, setSQuery] = useState('');
  const [selectedCategoriesList, setSelectedCategoriesList] = useState([]);

  return (
    <div className="tags-list">
      <div className="selected">
        <h5 className="title">Đã chọn { selectedCategoriesList.length } danh mục</h5>
      </div>
      <h4 
        className="tags-list-title" 
        title="Chọn danh mục có liên quan đến bài viết"
      >
        Chọn danh mục có liên quan đến bài viết
      </h4>
      <SearchCategoriesUpload query={ q => { setSQuery(q) } } />
      <ListCategoriesUpload 
        categoriesList={ list => { 
          categoriesList(list); 
          setSelectedCategoriesList(list); 
          } 
        }
        query={ sQuery }
      />
    </div>
  );
}
