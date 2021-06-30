import { useEffect, useState } from "react";

import FormEdit from "./FormEdit";

export default function TabItem({ 
  rendered, 
  showEditButton = true,
}) 
{
  const [hideForm, setHideForm] = useState(true);
  const [innerRendered, setInnerRendered] = useState('');

  useEffect(() => {
    setInnerRendered(rendered);
  }, [rendered]);

  return (
    <div className="row">
      <span className="name col">Ảnh đại diện</span>
      <span className="content col">
        <span className="rendered">
          {
            innerRendered
              ? <img src={ innerRendered } alt="avatar" />
              : null
          }
        </span>
        <FormEdit 
          hidden={ hideForm } 
          setHideForm={ () => { setHideForm(true) } } 
          setContentRendered={ val => { setInnerRendered(val) } }
        />
      </span>
      <span
        className={ showEditButton ? `edit col` : `edit col disabled` }
        onClick={ () => { setHideForm(!hideForm) } }
      >
        <i className="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </span>
    </div>
  );
}
