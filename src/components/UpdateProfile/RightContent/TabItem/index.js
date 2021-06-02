import { useEffect, useState } from "react";
import FormEdit from "./FormEdit";
import NotificationCard from "../../../shared/NotificationCard";

export default function TabItem({ 
  name, 
  rendered, 
  formType = "text",
  showEditButton = true,
  formData = [], 
}) 
{
  const [hideForm, setHideForm] = useState(true);
  const [innerRendered, setInnerRendered] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [contentNotif, setContentNotif] = useState('');

  useEffect(() => {
    setInnerRendered(rendered);
  }, [rendered]);

  return (
    <div className="row">
      <span className="name col">{ name }</span>

      <span className="content col">
        <span className="rendered">{ innerRendered }</span>
        <FormEdit 
          hidden={hideForm} 
          type={formType} 
          setHideForm={ val => { setHideForm(true) } } 
          setContentRendered={ val => { setInnerRendered(val) } }
          formData={ formData }
          showNotif={ val => { setShowNotif(val) } }
          contentNotif={ val => { setContentNotif(val) } }
        />
      </span>

      <a
        className={ showEditButton ? `edit col` : `edit col disabled` }
        onClick={ e => { setHideForm(!hideForm) } }
      >
        <i class="fad fa-pencil-alt icon"></i>
        <span className="text">Chỉnh sửa</span>
      </a>
      
      <NotificationCard 
        show={ showNotif }
        showCloseButton={ true }
        content={ contentNotif }
      />
    </div>
  );
}
