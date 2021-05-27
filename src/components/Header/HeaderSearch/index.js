export default function HeaderNav() {
    return (
        <div className="header-search">
          <form action="#">
            <label>
              <input
                type="search"
                name="search-text"
                className="form-control"
                placeholder="Nhập từ khóa ..."
              />
              <i className="icon-search" />
            </label>
          </form>
      </div>
    );
  }
  