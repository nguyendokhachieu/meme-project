import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserOptions({ 
  userInfo
}) 
{
  const { id } = useSelector(state => state.user);
  const isThisPerson = id === userInfo.user_id;

  return (
    <div className="user-info-options">
      {
        !isThisPerson
          ? id
            ? <a className="mr-1 btn btn-transparent-bc">Theo dõi</a>
            : null
          : null
      }
      {
        isThisPerson
          ? (
            <>
              <Link to="change-password" className="mr-1 btn btn-transparent-bc">
                Đổi mật khẩu
              </Link>
              <Link to="/update" className="btn btn-transparent-bc">
              Change Profile
              </Link>
            </>
          )
          : null
      }
    </div>
  );
}
