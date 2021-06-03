import "./sidebar.scss";
import OrderBy from "./OrderBy";
import OrderDir from "./OrderDir";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export default function Sidebar({
    onOrderDirChange = function() {},
    onOrderByChange = function() {},
}) 
{
  const [showFilter, setShowFilter] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    width <= 992 && setShowFilter(false);
  },[width]);

  return (
    <div className="search-sidebar">
      <h2 className="title" onClick={ e => { setShowFilter(prev => !prev) } }>
        <i class="fad fa-filter icon"></i>
        <span className="text">Bộ lọc tìm kiếm</span>
        <a className="indicator">
          {
            showFilter ? "Ẩn" : "Hiển thị"
          }
        </a>
      </h2>
      {
        showFilter
          ? (
            <div className="search-filter">
              <OrderDir onOrderDirChange={ value => { onOrderDirChange(value) } } />
              <OrderBy onOrderByChange={ value => { onOrderByChange(value) } } />
            </div>
          )
          : null
      }
    </div>
  );
}
