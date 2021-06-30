import { useState } from "react";
import { useDispatch } from "react-redux";

import striptags from "striptags";

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
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  if (hidden) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;

    if (striptags(description).trim() === '') {
      dispatch(actShowNotificationCard('Mô tả rỗng!'));
      return;
    }

    const frm = new FormData();
    frm.append('description', description);

    try {
      setLoading(true);
      dispatch(actShowLoading());

      const response = await UserService.update(frm);

      setLoading(false);
      dispatch(actHideLoading());
      
      if (response.data.status === 200) {
        setContentRendered(description);
        setDescription('');
        setHideForm(true);
  
        dispatch(actShowNotificationCard(response.data.message));
        return;
      }
  
      dispatch(actShowNotificationCard(response.data.message));
      setDescription('');
      setHideForm(true);
    } catch (error) {
      dispatch(actShowNotificationCard("Lỗi mạng"));
    }
  }

  return (
    <form className="form-edit" onSubmit={ handleSubmit }>
      <div className="control-wrap">
        <textarea 
          type="text" 
          id="name" 
          className="edit-input" 
          onChange={ e => { setDescription(e.target.value) } } 
        />
      </div>
      <div className="control-wrap">
        <input type="submit" className="edit-button" value="Sửa thông tin" />
        <input type="submit" className="edit-button" value="Hủy" onClick={ () => { setHideForm(true) } } />
      </div>
    </form>
  );
}