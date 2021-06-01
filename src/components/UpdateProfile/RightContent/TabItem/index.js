import { useState } from "react";
import FormEdit from "./FormEdit";

export default function TabItem({ 
  name, 
  rendered, 
  formType = "text" 
}) 
{
  const [hideForm, setHideForm] = useState(true);

  return (
    <div className="row">
      <span className="name col">{ name }</span>

      <span className="content col">
        <span className="rendered">{ rendered }</span>
        <FormEdit hidden={hideForm} type={formType} setHideForm={ val => { setHideForm(true) } } />
      </span>

      <a
        className="edit col"
        onClick={ e => { setHideForm(!hideForm) } }
      >
        <i class="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </a>
    </div>
  );
}
