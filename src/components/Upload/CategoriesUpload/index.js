import { useState } from "react";

import Seleted from "./Seleted";
import SearchCategoriesUpload from "./SearchCategoriesUpload";
import ListCategoriesUpload from "./ListCategoriesUpload";
import CreateNewCategories from "./CreateNewCategories";

export default function CategoriesUpload({
  categoriesList = function() {},
}) 
{
  const [sQuery, setSQuery] = useState('');
  const [selectedCategoriesList, setSelectedCategoriesList] = useState([]);
  const [reload, setReload] = useState(0);

  return (
    <div className="categories-list">
      <Seleted noOfCategoriesSeleted={ selectedCategoriesList.length } />
      <h4 
        className="title" 
        title="Chọn danh mục có liên quan đến bài viết"
      >
        Chọn danh mục có liên quan đến bài viết
      </h4>
      <span className="caption">Tick để chọn danh mục</span>
      <SearchCategoriesUpload query={ q => { setSQuery(q) } } />
      <ListCategoriesUpload 
        categoriesList={ list => { 
          categoriesList(list); 
          setSelectedCategoriesList(list); 
          } 
        }
        reloadCategoriesList={ reload }
        query={ sQuery }
      />
      <CreateNewCategories reloadCategoriesList={ val => { setReload(val)  } } />
    </div>
  );
}
