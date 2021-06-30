export default function LastChangePassword({ 
  date = '',
  time = '', 
}) 
{
  return (
    <div className="row">
      <span className="name col">Thay đổi mật khẩu gần nhất vào</span>
      <span className="content col">
        <span className="rendered flex-column disabled">
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
