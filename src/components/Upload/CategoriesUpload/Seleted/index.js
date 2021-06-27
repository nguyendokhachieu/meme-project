import "./seleted.scss";
import { useSelector } from "react-redux";

import { generateKeyCategoriesHash } from "../../../../store/categories/reducer";
import CategoryItem from "../../../shared/CategoryItem";

export default function Seleted() 
{
  const { categoriesHash, selectedUpload } = useSelector(state => state.categories);

  return (
    <div className="selected">
      <h5 className="title">Đã chọn { selectedUpload.list.length } danh mục</h5>
      {
        selectedUpload.list.length !== 0
          ? selectedUpload.list.map(cid => {
            const key = generateKeyCategoriesHash(cid);
            const value = categoriesHash[key];
            
            return <CategoryItem small hasClickEvent={ false } category={ value } />
          })
          : null
      }
    </div>
  );
}
