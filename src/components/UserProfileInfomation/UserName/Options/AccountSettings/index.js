import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountSettings({
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
      <Link to="/update" className="item-link" onClick={ () => { setShowOptions(false) } }>
        <i className="fad fa-cogs item-icon"></i>
        Quản lý tài khoản của bạn
      </Link>
    </li>
  );
}
