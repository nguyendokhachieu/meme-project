import "./sidebar.scss";

import OrderBy from "./OrderBy";
import OrderDir from "./OrderDir";
import SearchBy from "./SearchBy";

import { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export default function Sidebar({
    onOrderDirChange = function() {},
    onOrderByChange = function() {},
    onSearchByChange = function() {},
}) 
{
  const [showFilter, setShowFilter] = useState(true);
  const [orderBy, setOrderBy]  = useState('created_at');
  const { width } = useWindowSize();

  useEffect(() => {
    width <= 992 && setShowFilter(false);
  },[width]);

  return (
    <div className="search-sidebar">
      <h2 className="title" onClick={ e => { setShowFilter(prev => !prev) } }>
        <i className="fad fa-filter icon"></i>
        <span className="text">Bộ lọc tìm kiếm</span>
        <span className="indicator">
          {
            showFilter ? "Ẩn" : "Hiển thị"
          }
        </span>
      </h2>
      {
        showFilter
          ? (
            <div className="search-filter">
              <OrderDir 
                onOrderDirChange={ value => { onOrderDirChange(value) } } 
                orderBy={ orderBy }
              />
              <OrderBy 
                onOrderByChange={ value => { onOrderByChange(value); setOrderBy(value); } } 
              />
              <SearchBy 
                onSearchByChange={ value => { onSearchByChange(value); } }
              />
            </div>
          )
          : null
      }
    </div>
  );
}
