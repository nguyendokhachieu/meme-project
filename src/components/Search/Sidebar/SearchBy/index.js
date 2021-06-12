import { useEffect, useState } from "react";

export default function SearchBy({
  onSearchByChange = function() {},
}) 
{
  const [searchBy, setSearchBy] = useState('posts');
  
  useEffect(() => {
    onSearchByChange(searchBy);
  }, [searchBy]);

  return (
    <div className="order">
      <h5 className="cri-title">
        Tìm kiếm:
        <i className="fal fa-users icon"></i>
        <i className="fal fa-newspaper icon"></i>
      </h5>
      <form className="form-group">
        <div className="input-wrap">
          <input
            type="radio"
            name="searchBy"
            id="posts"
            className="order-input"
            value="posts"
            defaultChecked={ true }
            onChange={ e => { e.target.checked && setSearchBy(e.target.value) } }
          />
          <label htmlFor="posts" className="order-label">
            Nội dung bài viết
          </label>
        </div>
        <div className="input-wrap">
          <input
            type="radio"
            name="searchBy"
            id="users"
            className="order-input"
            value="users"
            defaultChecked={ false }
            onChange={ e => { e.target.checked && setSearchBy(e.target.value) } }
          />
          <label htmlFor="users" className="order-label">
            Người dùng
          </label>
        </div>
      </form>
    </div>
  );
}
