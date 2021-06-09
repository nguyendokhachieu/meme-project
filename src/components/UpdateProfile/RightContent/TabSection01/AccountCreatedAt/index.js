export default function AccountCreatedAt({ 
  rendered = '', 
}) 
{
  return (
    <div className="row">
      <span className="name col">Tạo tài khoản vào</span>
      <span className="content col">
        <span className="rendered">{ rendered }</span>
      </span>
      <a className="edit col disabled">
        <i class="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </a>
    </div>
  );
}
