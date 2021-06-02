import { useState } from "react";
import dayjs from "dayjs";
import { UserService } from "../../../../../services/user";

export default function FormEdit({ 
    setHideForm = function() {},
    setContentRendered = function() {},
    hidden = true, 
    type = 'text',
    formData = null,
    showNotif = function() {},
    contentNotif = function() {},
}) 
{
  const [name, setName] = useState('');
  const [sex, setSex] = useState(-1);
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
                {
                  formData.map(v => {
                    return <option value={ v.id }>{ v.val }</option>;
                  })
                }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const id = e.target.children[0].children[0].id;
    
    showNotif(false);
    contentNotif('');

    if (id === 'name') {
      if (name.trim() === '') {
        contentNotif('Họ và tên không được rỗng');
        showNotif(true);

        return;
      }

      const frm = new FormData();
      frm.append(id, name);

      const response = await UserService.update(frm);

      contentNotif(response.data.message);
      showNotif(true);

      setContentRendered(name);
      setName('');
      setHideForm(true);
    }

    if (id === 'sex') {
      if (Number(sex) === -1) {
        contentNotif("Bạn chưa chọn giới tính");
        showNotif(true);

        return;
      }

      const frm = new FormData();
      frm.append(id, sex);

      const response = await UserService.update(frm);

      contentNotif(response.data.message);
      showNotif(true);
      setContentRendered(Number(sex) === 1 ? 'Nam' : 'Nữ');
      setSex(0);
      setHideForm(true);
    }

    if (id === 'birthday') {
      const frm = new FormData();
      frm.append(id, birthday);

      const response = await UserService.update(frm);

      contentNotif(response.data.message);
      showNotif(true);
      setContentRendered(dayjs(birthday).format('DD - MM + YYYY').replace('-', 'tháng').replace('+', 'năm'));
      setBirthday('0000-00-00');
      setHideForm(true);
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
    </form>
  );
}