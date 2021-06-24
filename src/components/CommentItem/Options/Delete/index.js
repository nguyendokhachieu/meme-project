import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actShowDeleteCommentModal } from "../../../../store/modals/actions";

export default function Delete({
  setShowOptions = function() {},
  comment,
}) 
{
  const dispatch = useDispatch();
  const [isThisPerson, setIsThisPerson] = useState(false);
  const { id: user_id } = useSelector(state => state.user);

  useEffect(() => {
    Number(comment.user_id) === Number(user_id) && setIsThisPerson(true);
  }, [comment.user_id, user_id]);
  
  if (!isThisPerson) {
    return null;
  }
  
  return (
    <li className="option-item">
      <span className="item-link" onClick={ () => { setShowOptions(false); dispatch(actShowDeleteCommentModal(comment.id, comment.user_id)) } }>
        <i className="fad fa-trash-alt item-icon"></i>
        Xóa bình luận này
      </span>
    </li>
  );
}
