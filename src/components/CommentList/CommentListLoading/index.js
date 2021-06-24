import "./cmt-list-loading.scss";
import CommentItemLoading from "../../CommentItem/CommentItemLoading";
export default function CommentListLoading({
    noOfItems = 2,
}) 
{
    const rendered = [];
    for (let i = 0; i < noOfItems; i++) {
        rendered.push(<CommentItemLoading key={ i } />);
    }

    return (
        <div className="comments-list">{ rendered }</div>
    );
}