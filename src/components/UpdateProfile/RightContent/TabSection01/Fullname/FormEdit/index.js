import { useState } from "react";
import { UserService } from "../../../../../../services/user";

export default function FormEdit({ 
    setHideForm = function() {},
    setContentRendered = function() {},
    hidden = true, 
    showNotif = function() {},
    contentNotif = function() {},
}) 
{
  const [name, setName] = useState('');

  if (hidden) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    showNotif(false);
    contentNotif('');

    if (name.trim() === '') {
      contentNotif('Họ và tên không được rỗng');
      showNotif(true);

      return;
    }

    const frm = new FormData();
    frm.append('name', name);

    const response = await UserService.update(frm);

    contentNotif(response.data.message);
    showNotif(true);

    setContentRendered(name);
    setName('');
    setHideForm(true);
  }

  return (
    <form className="form-edit" onSubmit={ handleSubmit }>
      <div className="control-wrap">
        <input 
          type="text" 
          id="name" 
          className="edit-input" 
          onChange={ e => { setName(e.target.value) } } 
        />
      </div>
      <div className="control-wrap">
        <input type="submit" className="edit-button" value="Sửa thông tin" />
        <input type="submit" className="edit-button" value="Hủy" onClick={ e => { setHideForm(true) } } />
      </div>
    </form>
  );
}