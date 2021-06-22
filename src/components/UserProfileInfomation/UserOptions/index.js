import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserService } from "../../../services/user";
import { actShowNotificationCard } from "../../../store/notifications/actions";

export default function UserOptions({ 
  userInfo,
  setCountFollowed = function(){},
}) 
{
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.user);
  const isThisPerson = (id === userInfo.user_id);
  const [isFollowing, setIsFollowing] = useState(false);
  const [callingAPI, setCallingAPI] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const followOrUnfollow = async (sign) => {
    if (callingAPI) {
      return;
    }

    if (!id) {
      return;
    }

    setCallingAPI(true);

    if (sign === '+' && !isFollowing) {
      setIsFollowing(true);
      setShowDropdown(false);
      setCountFollowed('+');
      
      await UserService.follow(id, userInfo.user_id);
    }

    if (sign === '-' && isFollowing) {
      setIsFollowing(false);
      setCountFollowed('-');
      
      const response = await UserService.unfollow(id, userInfo.user_id);
      
      response.data.unfollow && dispatch(actShowNotificationCard(`Hủy theo dõi ${ userInfo.name }`));
      !response.data.unfollow && dispatch(actShowNotificationCard(`Có lỗi xảy ra!`));
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
  }, [id, userInfo]);

  const clickEventCallback = useCallback(e => {
    dropdownRef.current && !dropdownRef.current.contains(e.target) && setShowDropdown(false);
  }, []);

  useEffect(() => {
   document.addEventListener('click', clickEventCallback);
   
   return () => {
     document.removeEventListener('click', clickEventCallback);
   }
  });

  return (
    <div className="user-info-options">
      {
        !isThisPerson
          ? id
            ? (
              <a 
                className={ isFollowing ? 'follow-btn btn following' : 'follow-btn btn not-following gray-color'}
                onClick={ e => { followOrUnfollow('+'); isFollowing && setShowDropdown(true); } } ref={ dropdownRef }
              >
                {
                  isFollowing
                    ? <span ><i class="fal fa-check tick-icon"></i>Đang theo dõi</span>
                    : <span ><i class="fad fa-user-plus tick-icon"></i>Theo dõi</span>
                }
                {
                  !isFollowing
                    ? null 
                    : (
                      <section className={ showDropdown ? "dropdown show" : "dropdown" } >
                        <a className="btn dropdown-btn" onClick={ e => { e.stopPropagation(); followOrUnfollow('-') } }>
                          <i class="fad fa-user-minus icon"></i>
                          Hủy theo dõi
                        </a>
                      </section>
                    )
                }
              </a>
            )
            : null
          : null
      }
      {
        isThisPerson
          ? (
            <Link to="/update" className="btn btn-transparent-bc gray-color">
              Quản lý tài khoản của bạn
            </Link>
          )
          : null
      }
    </div>
  );
}
