import { useState } from "react";
import { useDispatch } from "react-redux";

import { UserService } from "../../../../../../services/user";
import { actShowNotificationCard } from "../../../../../../store/notifications/actions";
import { actShowLoading, actHideLoading } from "../../../../../../store/loading/actions";

export default function FormEdit({ 
    setHideForm = function() {},
    setContentRendered = function() {},
    hidden = true, 
}) 
{
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  if (hidden) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;

    if (name.trim() === '') {
      dispatch(actShowNotificationCard('Họ và tên không được rỗng'));
      return;
    }

    const frm = new FormData();
    frm.append('name', name);

    try {
      setLoading(true);
      dispatch(actShowLoading());

      const response = await UserService.update(frm);

      setLoading(false);
      dispatch(actHideLoading());
      
      if (response.data.status === 200) {
        setContentRendered(name);
        setName('');
        setHideForm(true);
  
        dispatch(actShowNotificationCard(response.data.message));
        return;
      }
  
      dispatch(actShowNotificationCard(response.data.message));
      setName('');
      setHideForm(true);
    } catch (error) {
      dispatch(actShowNotificationCard("Lỗi mạng"));
    }
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
        <input type="submit" className="edit-button" value="Hủy" onClick={ () => { setHideForm(true) } } />
      </div>
    </form>
  );
}