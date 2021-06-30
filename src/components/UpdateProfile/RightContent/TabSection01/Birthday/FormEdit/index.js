import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import { actShowLoading, actHideLoading } from "../../../../../../store/loading/actions";
import { actShowNotificationCard } from "../../../../../../store/notifications/actions";
import { UserService } from "../../../../../../services/user";

export default function FormEdit({ 
    setHideForm = function() {},
    setContentRendered = function() {},
    hidden = true, 
}) 
{
  const dispatch = useDispatch();
  const [birthday, setBirthday] = useState('0000-00-00');
  const [loading, setLoading] = useState(false);

  const now = new Date().getTime();
  const selected = new Date(birthday).getTime(); // 10 years === 315569259747 milliseconds

  if (hidden) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (now - selected < 315569259747) {
      dispatch(actShowNotificationCard('Bạn phải lớn hơn 10 tuổi!'));
      return;
    }

    const frm = new FormData();
    frm.append('birthday', birthday);
    
    try {
      setLoading(true);
      dispatch(actShowLoading());

      const response = await UserService.update(frm);

      setLoading(false);
      dispatch(actHideLoading());

      if (response.data.status === 200) {
        setContentRendered(dayjs(birthday).format('DD - MM + YYYY').replace('-', 'tháng').replace('+', 'năm'));
        setBirthday('0000-00-00');
        setHideForm(true);

        dispatch(actShowNotificationCard('Cập nhật sinh nhật thành công!'));
        return;
      }
      
      setBirthday('0000-00-00');
      setHideForm(true);

      dispatch(actShowNotificationCard(response.data.message));
    } catch (error) {
      dispatch(actShowNotificationCard('Lỗi mạng!'));
    }
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