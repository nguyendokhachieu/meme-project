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
  const [sex, setSex] = useState(-1);

  if (hidden) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    showNotif(false);
    contentNotif('');

    if (Number(sex) === -1) {
      contentNotif("Bạn chưa chọn giới tính");
      showNotif(true);

      return;
    }

    const frm = new FormData();
    frm.append('sex', sex);

    const response = await UserService.update(frm);

    contentNotif(response.data.message);
    showNotif(true);
    setContentRendered(Number(sex) === 1 ? 'Nam' : 'Nữ');
    setSex(0);
    setHideForm(true);
  }

  return (
    <form className="form-edit" onSubmit={ handleSubmit }>
      <div className="control-wrap">
        <select 
          className="edit-select" 
          id="sex" 
          onChange={ e => { setSex(e.target.value) } }
        >
          <option value="-1">Chọn giới tính</option>
          <option value="0">Nữ</option>
          <option value="1">Nam</option>
        </select>
      </div>
      <div className="control-wrap">
        <input type="submit" className="edit-button" value="Sửa thông tin" />
        <input type="submit" className="edit-button" value="Hủy" onClick={ e => { setHideForm(true) } } />
      </div>
    </form>
  );
}