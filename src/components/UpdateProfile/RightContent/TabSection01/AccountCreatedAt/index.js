export default function AccountCreatedAt({ 
  rendered = '', 
}) 
{
  return (
    <div className="row">
      <span className="name col">Tạo tài khoản vào</span>
      <span className="content col">
        <span className="rendered disabled">{ rendered }</span>
      </span>
      <span className="edit col disabled">
        <i className="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </span>
    </div>
  );
}
