import "./upload-button.scss";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { PostService } from "../../../services/posts";
import { actShowNotificationCard } from "../../../store/notifications/actions";

export default function UploadButton({
  file = {name: ''}, 
  status = '',
  categoriesList = [],
}) 
{
  const dispatch = useDispatch();
  const history = useHistory();
  const [UploadButtonDisabled, setUploadButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    let errorsCount = 0;
    if (!file.name) {
      errorsCount += 1;
    }
    if (!status) {
      errorsCount += 1;
    }
    
    if (errorsCount < 2) {
      const frm = new FormData();
      
      frm.append('image', file);
      frm.append('status', status);
      frm.append('categories', JSON.stringify(categoriesList));

      try {
        setLoading(true);
        const response = await PostService.upload(frm);

        setLoading(false);

        if (response.data.status === 404) {
          dispatch(actShowNotificationCard(response.data.message));
        } else {
          dispatch(actShowNotificationCard(response.data.message));
          
          history.push('/');
        }
        
      } catch (error) {
        dispatch(actShowNotificationCard("Có lỗi xảy ra, xin vui lòng thử lại"));
      }      
    }
  }

  useEffect(() => {    
    if (status.length !== 0) {
      setUploadButtonDisabled(false);
    } else {
      setUploadButtonDisabled(true);
    }

    if (file.name.length !== 0) {
      setUploadButtonDisabled(false);
    }
  }, [status, file]);

  return (
    <div className="btn-upload-wrap">
      <button 
        className={ UploadButtonDisabled || loading ? 'btn btn-filled-bc upload-btn-disabled' : 'btn btn-filled-bc' }
        onClick={ upload } 
        disabled={ UploadButtonDisabled }
      >
        {
          loading
            ? <i class="fa fa-spinner fa-spin icon"></i>
            : "Đăng bài"
        }
      </button>
    </div>
  );
}
