import "./comment-list-header.scss";
import { useSelector } from "react-redux";
import CollapseOptions from "./CollapseOptions";

export default function CommentListHeader() 
{
  const { totalComments } = useSelector(state => state.comments);

  return (
    <div className="comment-header">
      <h3 className="total-comment-count">{ totalComments } bình luận</h3>
      <div className="comment-sort">
        <span className="comment-sort-title">Sắp xếp theo:</span>
        <CollapseOptions />
      </div>
    </div>
  );
}
