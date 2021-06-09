import { useEffect, useState } from "react";
import FormEdit from "./FormEdit";
import NotificationCard from "../../../../shared/NotificationCard";

export default function TabItem({ 
  rendered, 
  showEditButton = true,
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
      <span className="name col">Họ và tên</span>

      <span className="content col">
        <span className="rendered">{ innerRendered }</span>
        <FormEdit 
          hidden={hideForm} 
          setHideForm={ val => { setHideForm(true) } } 
          setContentRendered={ val => { setInnerRendered(val) } }
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
      
      {
        showNotif
          ? (
            <NotificationCard 
              show={ showNotif }
              showCloseButton={ true }
              content={ contentNotif }
            />
          )
          : null
      }
    </div>
  );
}
