import "./style.css";

export default function CommentListHeader({
  totalComments,
}) {
  return (
    <div className="comment-header">
      <h3 className="total-comment-count">{ totalComments } bình luận</h3>
      <div className="comment-sort">
        <span className="comment-sort-title">Sắp xếp theo:</span>
        <a className="comment-sort-link" href>
          Mới nhất
        </a>
        <a className="comment-sort-link" href>
          Cũ nhất
        </a>
        <a className="comment-sort-link" href>
          Nhiều like nhất
        </a>
      </div>
    </div>
  );
}
