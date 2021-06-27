import { useState } from "react";

import Seleted from "./Seleted";
import SearchCategoriesUpload from "./SearchCategoriesUpload";
import ListCategoriesUpload from "./ListCategoriesUpload";
import CreateNewCategories from "./CreateNewCategories";

export default function CategoriesUpload() 
{
  const [sQuery, setSQuery] = useState('');

  return (
    <div className="categories-list">
      <Seleted />
      <h4 
        className="title" 
        title="Chọn danh mục có liên quan đến bài viết"
      >
        Chọn danh mục có liên quan đến bài viết
      </h4>
      <span className="caption">Tick để chọn danh mục</span>
      <SearchCategoriesUpload query={ q => { setSQuery(q) } } />
      <ListCategoriesUpload query={ sQuery } />
      <CreateNewCategories />
    </div>
  );
}
