export default function Search() {
  return (
    <div className="nav-search">
      <form action="#">
        <input
          type="search"
          name="search-text"
          className="form-control"
          placeholder="Tìm kiếm ..."
        />
      </form>
    </div>
  );
}
