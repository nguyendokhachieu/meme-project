import { Link, useLocation } from "react-router-dom";

export default function PostItemHeader({
    post,
}) 
{
  const location = useLocation();
  const link = <Link className="view-more" to={ `/post/${ post.id }` }>Xem thêm</Link>;

    return (
        <div className="post-item-content">
        <p className="post-item-text" >
          <span className="content">
            { 
              post.content && post.content.length > 250 
                ? location && location.pathname.includes('post')
                  ? post.content 
                  : (
                    <>
                    { post.content.substring(0, 250).concat('...') }
                    { link }
                    </>
                  )
                : post.content
            }
          </span>
        </p>
        <div className="post-item-image-wrap">
          <Link to={ `/post/${ post.id }` } className="post-item-image-link">
            <img
              className="post-item-image"
              src=
              {
                post.img_url
                  ? post.img_url
                  : null
              }
              alt=""
            />
          </Link>
        </div>
      </div>
    );
}