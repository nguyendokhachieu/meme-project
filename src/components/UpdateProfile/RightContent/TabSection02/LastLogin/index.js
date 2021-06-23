export default function LastLogin({ 
  date = '',
  time = '', 
}) 
{
  return (
    <div className="row">
      <span className="name col">Đăng nhập lần cuối vào</span>
      <span className="content col">
        <span className="rendered">
          <p>{time}</p>
          <p>{date}</p>
        </span>
      </span>
      <a className="edit col disabled">
        <i className="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </a>
    </div>
  );
}
