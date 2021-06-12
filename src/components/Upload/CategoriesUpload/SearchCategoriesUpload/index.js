import "./search-categories.scss";

export default function SearchCategoriesUpload({
  query = function() {},
}) 
{
  return (
    <form className="form-search-categories">
      <div className="form-control-wrap form-control-search">
        <input
          type="text"
          placeholder="Tìm kiếm danh mục"
          className="form-control categories-input-search"
          onChange={ e => { query(e.target.value) } }
        />
      </div>
    </form>
  );
}
