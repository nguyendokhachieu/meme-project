import "./form.scss";

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
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (hidden) {
    return null;
  }

  function onFileChange(e) {
    setFile(e.target.files[0]);

    const currentFile = e.target.files[0];

    if (currentFile) {
      const reader = new FileReader();
      
      reader.addEventListener('load', function() {
        setContentRendered(this.result);
      })

      reader.readAsDataURL(currentFile);
    } else {
      setContentRendered('');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;

    if (!file) {
      dispatch(actShowNotificationCard('Chưa có hình ảnh!'));
      return;
    }

    const frm = new FormData();
    frm.append('image', file);

    try {
      setLoading(true);
      dispatch(actShowLoading());

      const response = await UserService.update(frm);

      setLoading(false);
      dispatch(actHideLoading());
      
      if (response.data.status === 200) {
        setContentRendered(''); 
        setFile(null);
        setHideForm(true);
  
        dispatch(actShowNotificationCard(response.data.message + '. Vui lòng tải lại trang!'));
        return;
      }
  
      dispatch(actShowNotificationCard(response.data.message));
      setFile(null);
      setHideForm(true);
    } catch (error) {
      dispatch(actShowNotificationCard("Lỗi mạng"));
    }
  }

  return (
    <form className="form-edit" onSubmit={ handleSubmit }>
      <div className={ file ? 'control-wrap disabled' : 'control-wrap' }>
        <input 
          type="file" 
          id="file" 
          className="edit-input" 
          onChange={ onFileChange } 
        />
        <i className="fad fa-cloud-upload-alt icon"></i>
        <label htmlFor="file" className="file-label">Chọn hình ảnh tải lên</label>
      </div>
      <div className="control-wrap">
        <input type="submit" className="edit-button" value="Tải lên" />
        <input type="submit" className="edit-button" value="Hủy" onClick={ () => { setHideForm(true); setFile(null) } } />
      </div>
    </form>
  );
}