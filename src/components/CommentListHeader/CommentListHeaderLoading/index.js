import "./clh-loading.scss";

export default function CommentListHeader() 
{
  return (
    <div className="comment-header-loading">
      <h3 className="total-comment-count">0 bình luận</h3>
      <div className="comment-sort">
        <span className="comment-sort-title">Sắp xếp theo:</span>
        <a className="comment-sort-link">
          Mới nhất
        </a>
        <a className="comment-sort-link">
          Cũ nhất
        </a>
        <a className="comment-sort-link">
          Nhiều like nhất
        </a>
      </div>
    </div>
  );
}
