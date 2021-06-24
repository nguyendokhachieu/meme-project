import "./style.scss";

import { useEffect, useState } from "react";
import PostItem from "../PostItem";
import UserProfileLoading from "../UserProfileInfomation/UserProfileLoading";
import UserProfileInfomation from "../UserProfileInfomation";
import { UserService } from "../../services/user";
import { actFetchPostsByUserIdPaginationAsync } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropView from "./ProfileDropView";

export default function Profile({ 
  id,
  history
}) 
{
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const { posts, total_user_posts, page } = useSelector(state => state.posts.user);

  const handleLoadMore = () => {
    if (loadingPosts) {
      return;
    }

    if (posts.length >= total_user_posts) {
      setHasMorePosts(false);
    }

    dispatch(actFetchPostsByUserIdPaginationAsync({
      user_id: id,
      page: page + 1,
      per_page: 3,
    })).then(() => {
      setLoadingPosts(false);
    }).catch(() => {
      setLoadingPosts(false);
    });
  }

  useEffect(() => {
    async function get() {
      setLoadingUser(true);
  
      const response = await UserService.getUserInfoByUserId(id);
  
      if (response) setLoadingUser(false);
  
      if (response.data.status === 200) {
        setUserInfo(response.data.data);
      } else {
        history.push('/404-not-found');
      }
    }

    get();
  }, [id, history]);

  useEffect(() => {
    async function fetchPosts() {
      setLoadingPosts(true);
  
      dispatch(actFetchPostsByUserIdPaginationAsync({
        user_id: id,
        page: 1,
        per_page: 3,
      })).then(() => {
        setLoadingPosts(false);
      }).catch(() => {
        setLoadingPosts(false);
      });
    } 

    fetchPosts();
  }, [id, dispatch]);

  return (
    <div className="main-content">
      <ProfileDropView loading={ loadingUser } userInfo={ userInfo } />
      <div className="container">
        <section className="profile-section">
          {
            loadingUser
              ? <UserProfileLoading />
              : <UserProfileInfomation userInfo={ userInfo } />
          }
          <h3 className="user-posts-list-title">Danh sách bài viết</h3>
            <div className="user-posts-list">
              <div className="container">
                <div className="col-wrap">
                  <div className="main-col-8">
                      {
                        posts.length !== 0
                          ? posts.map(post => {
                            return <PostItem post={ post } key={ post.id } />
                          })
                          : null
                      }
                      {
                        hasMorePosts && (
                          <div align="center" style={{margin: "2rem 0"}}>
                            <button className="btn btn-transparent-bc" onClick={ handleLoadMore }>
                              { loadingPosts ? <i className="fa fa-spinner fa-spin"></i> : "Tải thêm" }
                            </button>
                          </div>
                        )
                      }
                  </div>
                  <div className="main-col-4"></div>
                </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
