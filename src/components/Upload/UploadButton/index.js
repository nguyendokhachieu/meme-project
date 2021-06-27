import "./upload-button.scss";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { actUploadNewPostAsync } from "../../../store/posts/actions";
import { actShowNotificationCard } from "../../../store/notifications/actions";

export default function UploadButton({
  file = {name: ''}, 
  status = '',
}) 
{
  const dispatch = useDispatch();
  const history = useHistory();
  const [UploadButtonDisabled, setUploadButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { list: categoriesList } = useSelector(state => state.categories.selectedUpload);

  const upload = async () => {
    let errorsCount = 0;
    if (!file.name) errorsCount += 1;
    if (!status) errorsCount += 1;
    
    if (errorsCount > 1) {
      dispatch(actShowNotificationCard('Vui lòng chọn hình hoặc viết thêm caption!'));
      return;
    }

    const frm = new FormData();
      
    frm.append('image', file);
    frm.append('status', status);
    frm.append('categories', JSON.stringify(categoriesList));

    setLoading(true);

    dispatch(actUploadNewPostAsync(frm)).then(response => {
      setLoading(false);
      response.ok && dispatch(actShowNotificationCard("Đã tải lên!")) && history.push('/');
      !response.ok && dispatch(actShowNotificationCard(response.message));
    })
  }

  useEffect(() => {    
    if (status.length !== 0) setUploadButtonDisabled(false);
    else setUploadButtonDisabled(true);

    file.name.length !== 0 && setUploadButtonDisabled(false);
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
            ? <i className="fa fa-spinner fa-spin icon"></i>
            : "Đăng bài"
        }
      </button>
    </div>
  );
}
