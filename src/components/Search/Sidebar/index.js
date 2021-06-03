import OrderBy from "./OrderBy";
import OrderDir from "./OrderDir";

export default function Sidebar({
    onOrderDirChange = function() {},
    onOrderByChange = function() {},
}) 
{
  return (
    <div className="search-sidebar">
      <h2 className="title">
        Bộ lọc tìm kiếm
        <i class="fad fa-filter icon"></i>
      </h2>
      <div className="search-filter">
        <OrderDir onOrderDirChange={ value => { onOrderDirChange(value) } } />
        <OrderBy onOrderByChange={ value => { onOrderByChange(value) } } />
      </div>
    </div>
  );
}
