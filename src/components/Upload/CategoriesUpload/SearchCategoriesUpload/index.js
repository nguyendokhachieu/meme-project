export default function SearchCategoriesUpload() {
  return (
    <form className="form-search-categories">
      <div className="form-control-wrap form-control-search">
        <i class="far fa-search"></i>
        <input
          type="text"
          placeholder="Tìm kiếm danh mục"
          className="form-control categories-input-search"
        />
      </div>
    </form>
  );
}
