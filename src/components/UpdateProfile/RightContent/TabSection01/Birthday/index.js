import { useEffect, useState } from "react";
import FormEdit from "./FormEdit";

export default function Birthday({ 
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
      <span className="name col">Sinh nhật</span>
      <span className="content col">
        <span className="rendered">{ innerRendered }</span>
        <FormEdit 
          hidden={hideForm} 
          setHideForm={ () => { setHideForm(true) } } 
          setContentRendered={ val => { setInnerRendered(val) } }
        />
      </span>
      <span
        className={ showEditButton ? `edit col` : `edit col disabled` }
        onClick={ e => { setHideForm(!hideForm) } }
      >
        <i className="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </span>
    </div>
  );
}
