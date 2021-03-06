import { useEffect, useState } from "react";

export default function Username({ 
  rendered, 
  showEditButton = true,
}) 
{
  const [innerRendered, setInnerRendered] = useState('');

  useEffect(() => {
    setInnerRendered(rendered);
  }, [rendered]);

  return (
    <div className="row">
      <span className="name col">Username</span>
      <span className="content col">
        <span className="rendered disabled">{ innerRendered }</span>
      </span>
      <span className={ showEditButton ? `edit col` : `edit col disabled` } >
        <i className="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </span>
    </div>
  );
}
