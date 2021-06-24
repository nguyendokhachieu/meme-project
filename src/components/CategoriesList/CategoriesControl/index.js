import "./category-control.scss";

export default function CategoriesControl({ 
    onSearchString = function () {} 
}) 
{
  return (
    <div className="categories-control">
      <form>
        <input
          className="form-control categories-search-input"
          placeholder="Tìm kiếm danh mục ..."
          onChange={ e => { onSearchString(e.target.value) } }
        />
      </form>
    </div>
  );
}
