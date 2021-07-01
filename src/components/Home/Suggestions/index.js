import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserSuggestionsAsync } from "../../../store/user/actions";
import "./suggestions.scss";

import UserItem from "./UserItem";

export default function Suggestions() {
  const dispatch = useDispatch();
  const { token, suggestions } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    if (loading) return;

    setLoading(true);

    dispatch(actFetchUserSuggestionsAsync({
      page: 1,
      per_page: 50,
    })).then(() => { 
      setLoading(false);
    })    
  }, [token]);

  return (
    <div className="suggestions">
      <section className="suggestions-section">
        <div className="title">
          <h2>Gợi ý theo dõi</h2>
          <div className="more">
            {/* <span className="text">Xem nhiều hơn</span> */}
          </div>
        </div>
        <div className="users">
          {
            loading 
              ? <div className="load"><span><i className="fal fa-spinner-third fa-spin icon"></i></span></div>
              : suggestions.list.length !== 0 
                ? (
                  suggestions.list.map(userItem => {
                    return <UserItem key={ userItem.id } user={ userItem } />
                  })
                )
                : !loading && <div className="empty"><i className="fad fa-empty-set icon"></i>Chưa có đề xuất!</div>
          }        
        </div>
      </section>
    </div>
  );
}
