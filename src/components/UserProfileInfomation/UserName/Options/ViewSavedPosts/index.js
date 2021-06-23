import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function ViewSavedPosts({
  setShowOptions = function() {},
}) 
{
  const location = useLocation();
  const { id } = useSelector(state => state.user);

  const uid = Number(location.search.substr(4, location.search.length));

  if (uid !== Number(id)) {
    return null;
  }

  return (
    <li className="option-item">
      <Link to="/saved" className="item-link" onClick={ () => { setShowOptions(false) } }>
        <i class="fad fa-list-alt item-icon"></i>
        Xem các bài viết đã lưu
      </Link>
    </li>
  );
}
