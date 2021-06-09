import { useState } from "react";
import dayjs from "dayjs";
import { UserService } from "../../../../../../services/user";

export default function FormEdit({ 
    setHideForm = function() {},
    setContentRendered = function() {},
    hidden = true, 
    showNotif = function() {},
    contentNotif = function() {},
}) 
{
  const [birthday, setBirthday] = useState('0000-00-00');

  if (hidden) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    showNotif(false);
    contentNotif('');

    const frm = new FormData();
    frm.append('birthday', birthday);

    const response = await UserService.update(frm);

    contentNotif(response.data.message);
    showNotif(true);
    setContentRendered(dayjs(birthday).format('DD - MM + YYYY').replace('-', 'tháng').replace('+', 'năm'));
    setBirthday('0000-00-00');
    setHideForm(true);
  }

  return (
    <form className="form-edit" onSubmit={ handleSubmit }>
      <div className="control-wrap">
        <input 
          type="date" 
          id="birthday" 
          className="edit-input" 
          onChange={ e => { setBirthday(e.target.value) } } 
        />
      </div>
      <div className="control-wrap">
        <input type="submit" className="edit-button" value="Sửa thông tin" />
        <input type="submit" className="edit-button" value="Hủy" onClick={ e => { setHideForm(true) } } />
      </div>
    </form>
  );
}