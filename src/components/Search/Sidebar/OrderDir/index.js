import { useEffect, useState } from "react";

export default function OrderDir({
  onOrderDirChange = function() {}
}) {
  const [orderDir, setOrderDir] = useState('DESC');

  useEffect(() => {
    onOrderDirChange(orderDir);
  }, [orderDir]);

  return (
    <div className="order">
      <h5 className="cri-title">
        Sắp xếp theo:
        <i class="fal fa-sort-size-up icon"></i>
        <i class="fal fa-sort-size-down icon"></i>
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
            onChange={ e => { e.target.checked && setOrderDir(e.target.value) } }
          />
          <label htmlFor="ASC" className="order-label">
            Tăng dần
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
            onChange={ e => { e.target.checked && setOrderDir(e.target.value) } }
          />
          <label htmlFor="DESC" className="order-label">
            Giảm dần
          </label>
        </div>
      </form>
    </div>
  );
}
