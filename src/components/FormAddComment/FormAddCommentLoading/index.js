import "./fac-loading.scss";

export default function FormAddCommentLoading() 
{
  return (
    <div className="fac-loading">
      <div className="add-comment">
        <form className="comment-form">
          <div className="form-ctl-wrap">
            <div className="comment-input"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
