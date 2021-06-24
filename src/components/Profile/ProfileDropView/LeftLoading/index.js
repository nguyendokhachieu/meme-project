import "./left-loading.scss";

export default function LeftLoading() 
{
  return (
    <div className="left-loading">
        <span className="avatar-wrap">
            <span className="img"/>
        </span>
        <span className="fullname">Loading</span>
    </div>
  );
}
