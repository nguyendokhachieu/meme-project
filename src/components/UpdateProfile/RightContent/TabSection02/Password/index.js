import { useHistory } from "react-router";

export default function Password() 
{
  const history = useHistory();

  return (
    <div className="row">
      <span className="name col">Password</span>
      <span className="content col">
        <span className="rendered">
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
          <i class="fas fa-circle" style={{ margin: '0 0.15rem', fontSize: "1rem" }}></i>
        </span>
      </span>
      <a
        className="edit col"
        onClick={ e => { history.push({
          pathname: '/change-password',
          state: {
            history: '/update#02-privacy'
          },
        }) } }
      >
        <i class="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </a>
    </div>
  );
}