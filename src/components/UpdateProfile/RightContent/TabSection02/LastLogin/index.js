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
          <span>{time}</span>
          <span>{date}</span>
        </span>
      </span>
      <span className="edit col disabled">
        <i className="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </span>
    </div>
  );
}
