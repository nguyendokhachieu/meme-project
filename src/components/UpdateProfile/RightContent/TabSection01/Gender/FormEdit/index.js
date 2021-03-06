import { useState } from "react";
import { useDispatch } from "react-redux";

import { actShowNotificationCard } from "../../../../../../store/notifications/actions";
import { actShowLoading, actHideLoading } from "../../../../../../store/loading/actions";
import { UserService } from "../../../../../../services/user";

export default function FormEdit({ 
    setHideForm = function() {},
    setContentRendered = function() {},
    hidden = true, 
}) 
{
  const dispatch = useDispatch();
  const [sex, setSex] = useState(-1);
  const [loading, setLoading] = useState(false);

  if (hidden) {
    return null;
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (loading) return;

    if (Number(sex) === -1) {
      dispatch(actShowNotificationCard('Bạn chưa chọn giới tính!'));
      return;
    }

    const frm = new FormData();
    frm.append('sex', sex);

    try {
      setLoading(true);
      dispatch(actShowLoading());

      const response = await UserService.update(frm);

      setLoading(false);
      dispatch(actHideLoading());

      if (response.data.status === 200) {
        setContentRendered(Number(sex) === 1 ? 'Nam' : 'Nữ');
        setSex(-1);
        setHideForm(true);

        dispatch(actShowNotificationCard('Cập nhật giới tính thành công'));
        return;
      }

      setSex(-1);
      setHideForm(true);
      dispatch(actShowNotificationCard(response.data.message));
    } catch (error) {
      dispatch(actShowNotificationCard('Lỗi mạng!'));
    }
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
        <input type="submit" className="edit-button" value="Hủy" onClick={ () => { setHideForm(true) } } />
      </div>
    </form>
  );
}