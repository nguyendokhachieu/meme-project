import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserService } from "../../../services/user";

export default function UserOptions({ 
  userInfo,
  setCountFollowed = function(){},
}) 
{
  const { id } = useSelector(state => state.user);
  const isThisPerson = (id === userInfo.user_id);
  const [isFollowing, setIsFollowing] = useState(false);
  const [callingAPI, setCallingAPI] = useState(false);

  const followThisPerson = async () => {
    if (callingAPI) {
      return;
    }

    if (!id) {
      return;
    }

    setCallingAPI(true);

    if (isFollowing) {
      setIsFollowing(false);
      setCountFollowed('-');

      const response = await UserService.unfollow(id, userInfo.user_id);
    } else {
      setIsFollowing(true);
      setCountFollowed('+');
      
      const response = await UserService.follow(id, userInfo.user_id);
    }

    setCallingAPI(false);
  }

  useEffect(async () => {
    if (id) {
      const res = await UserService.isFollowing(id, userInfo.user_id);

      if (res.data.isFollowing) {
        setIsFollowing(true);
      }
    }
  }, [id]);

  return (
    <div className="user-info-options">
      {
        !isThisPerson
          ? id
            ? (
              <a 
                className={ isFollowing ? 'mr-1 btn btn-transparent-bc following no-hover' : 'mr-1 btn btn-transparent-bc gray-color'}
                onClick={ followThisPerson } 
              >
                {
                  isFollowing
                    ? ( <span ><i class="fal fa-check tick-icon"></i>Đang theo dõi</span>
                    )
                    : 'Theo dõi'
                }
              </a>
            )
            : null
          : null
      }
      {
        isThisPerson
          ? (
            <>
              <Link to="change-password" className="mr-1 btn btn-transparent-bc gray-color">
                Đổi mật khẩu
              </Link>
              <Link to="/update" className="btn btn-transparent-bc gray-color">
                Change Profile
              </Link>
            </>
          )
          : null
      }
    </div>
  );
}
