import "./clh-loading.scss";

export default function CommentListHeader() 
{
  return (
    <div className="comment-header-loading">
      <h3 className="total-comment-count">0 bình luận</h3>
      <div className="comment-sort">
        <span className="comment-sort-title">Sắp xếp theo:</span>
        <span className="comment-sort-link">
          Mới nhất
        </span>
        <span className="comment-sort-link">
          Cũ nhất
        </span>
        <span className="comment-sort-link">
          Nhiều like nhất
        </span>
      </div>
    </div>
  );
}
