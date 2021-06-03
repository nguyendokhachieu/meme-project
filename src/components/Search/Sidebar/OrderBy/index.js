import { useEffect, useState } from "react";

export default function OrderBy({
  onOrderByChange = function() {}
}) 
{
  const [orderBy, setOrderBy] = useState('created_at');

  useEffect(() => {
    onOrderByChange(orderBy);
  }, [orderBy]);

  return (
    <div className="order">
      <h5 className="cri-title">
        Sắp xếp bởi:
        <i class="fad fa-clock icon"></i>
        <i class="fal fa-heart icon"></i>
        <i class="fal fa-comment icon"></i>
      </h5>
      <form className="form-group">
        <div className="input-wrap">
          <input
            type="radio"
            name="orderBy"
            id="created_at"
            className="order-input"
            value="created_at"
            defaultChecked={ true }
            onChange={ e => { e.target.checked && setOrderBy(e.target.value) } }
          />
          <label htmlFor="created_at" className="order-label">
            Thời gian đăng bài
          </label>
        </div>
        <div className="input-wrap">
          <input
            type="radio"
            name="orderBy"
            id="liked_count"
            className="order-input"
            value="liked_count"
            defaultChecked={ false }
            onChange={ e => { e.target.checked && setOrderBy(e.target.value) } }
          />
          <label htmlFor="liked_count" className="order-label">
            Số lượt thả tym
          </label>
        </div>
        <div className="input-wrap">
          <input
            type="radio"
            name="orderBy"
            id="total_comments"
            className="order-input"
            value="total_comments"
            defaultChecked={ false }
            onChange={ e => { e.target.checked && setOrderBy(e.target.value) } }
          />
          <label htmlFor="total_comments" className="order-label">
            Số lượt bình luận
          </label>
        </div>
      </form>
    </div>
  );
}
