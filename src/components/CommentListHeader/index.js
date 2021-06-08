import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./comment-list-header.scss";

export default function CommentListHeader({
  totalComments,
}) 
{
  const [total, setTotal] = useState(0);
  const { newComment } = useSelector(state => state.comments);

  useEffect(() => {
    if (newComment.created_at) {
      setTotal(prev => prev + 1);
    }
  }, [newComment.created_at]);

  useEffect(() => {
    setTotal(Number(totalComments));
  }, [totalComments]);

  return (
    <div className="comment-header">
      <h3 className="total-comment-count">{ total } bình luận</h3>
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
