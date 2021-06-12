
export default function SearchBy() {

  return (
    <div className="order">
      <h5 className="cri-title">
        Tìm kiếm:
        <i class="fal fa-users icon"></i>
        <i class="fal fa-newspaper icon"></i>
      </h5>
      <form className="form-group">
        <div className="input-wrap">
          <input
            type="radio"
            name="orderDir"
            id="ASC"
            className="order-input"
            value="ASC"
            defaultChecked={ false }
          />
          <label htmlFor="ASC" className="order-label">
            Người dùng
          </label>
        </div>
        <div className="input-wrap">
          <input
            type="radio"
            name="orderDir"
            id="DESC"
            className="order-input"
            value="DESC"
            defaultChecked={ true }
          />
          <label htmlFor="DESC" className="order-label">
            Nội dung bài viết
          </label>
        </div>
      </form>
    </div>
  );
}
