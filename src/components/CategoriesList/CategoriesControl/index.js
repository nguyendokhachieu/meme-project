import "./category-control.scss";
import { useState } from "react";

export default function CategoriesControl({ 
    onSearchString = function () {} 
}) 
{
  const [searchString, setSearchString] = useState("");

  return (
    <div className="categories-control">
      <form>
        <input
          className="form-control categories-search-input"
          placeholder="Tìm kiếm danh mục ..."
          onChange={ e => {
            setSearchString(e.target.value);
            onSearchString(e.target.value);
          } }
        />
      </form>
    </div>
  );
}
