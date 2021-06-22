import "./left-loading.scss";

export default function LeftLoading() 
{
  return (
    <div className="left-loading">
        <a className="avatar-wrap">
            <span className="img"/>
        </a>
        <a className="fullname">Loading</a>
    </div>
  );
}
