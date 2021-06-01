import { useState } from "react";
import NotificationCard from "../../../../shared/NotificationCard";
import dayjs from "dayjs";

export default function FormEdit({ 
    setHideForm = function() {},
    hidden = true, 
    type = 'text',
}) 
{
  const [showNotif, setShowNotif] = useState(false);
  const [contentNotif, setContentNotif] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState(0);
  const [birthday, setBirthday] = useState('0000-00-00');

  if (hidden) {
    return null;
  }

  let elementRendered = null;

  switch (type) {
      case 'text':
          elementRendered = (
            <input 
              type="text" 
              id="name" 
              className="edit-input" 
              onChange={ e => { setName(e.target.value) } } 
            />
          );

          break;

      case 'select':
          elementRendered = (
              <select 
                className="edit-select" 
                id="sex" 
                onChange={ e => { setSex(e.target.value) } }
              >
                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
              </select>
          );
          
          break;

      case 'checkbox':
          elementRendered = (
            <>
                <label className="edit-label">
                    <input type="checkbox" name="sex" className="edit-input" value="1" />
                    Nam
                </label>
                <label className="edit-label">
                    <input type="checkbox" name="sex" className="edit-input" value="0" />
                    Nữ
                </label>
            </>
          );
          break;

      case 'date':
        elementRendered = (
          <input 
            type="date" 
            id="birthday" 
            className="edit-input" 
            onChange={ e => { setBirthday(e.target.value) } } 
          />
        );

        break;
  
      default:
          break;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const id = e.target.children[0].children[0].id;
    
    if (id === 'name') {
      if (name.trim() === '') {
        setContentNotif('Họ và tên không được rỗng');
        setShowNotif(true);

        return;
      }

      setShowNotif(false);
      setContentNotif('');

      const frm = new FormData();
      frm.append(id, name);

      
    }
  }

  return (
    <form className="form-edit" onSubmit={ handleSubmit }>
      <div className="control-wrap">
        { elementRendered  }
      </div>
      <div className="control-wrap">
        <input type="submit" className="edit-button" value="Sửa thông tin" />
        <input type="submit" className="edit-button" value="Hủy" onClick={ e => { setHideForm(true) } } />
      </div>
      <NotificationCard 
        show={ showNotif }
        showCloseButton={ false }
        content={ contentNotif }
      />
    </form>
  );
}
