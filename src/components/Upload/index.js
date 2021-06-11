import "./upload.scss";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import FormUpload from "./FormUpload";
import ImagePreview from "./ImagePreview";
import CategoriesUpload from "./CategoriesUpload";

import { PostService } from "../../services/posts";
import { actShowNotificationCard } from "../../store/notifications/actions";

export default function Upload() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [UploadButtonDisabled, setUploadButtonDisabled] = useState(true);
  const [categoriesList, setCategoriesList] = useState([]);
  const [file, setFile] = useState({name: ''});
  const [status, setStatus] = useState('');

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
        const response = await PostService.upload(frm);

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
    <div className="main-content">
      <div className="container">
        <section className="upload-section">
          <div className="col-wrap">
            <div className="main-col-8">
              <div className="upload-area">
                <FormUpload 
                  onFile={ f => { setFile(f) } } 
                  onStatus={ s => { setStatus(s) } }
                />
                <ImagePreview />
              </div>
            </div>
            <div className="main-col-4">
              <div className="upload-area">
                <div className="btn-upload-wrap">
                  <button 
                    className={ UploadButtonDisabled ? 'btn btn-filled-bc upload-btn-disabled' : 'btn btn-filled-bc' }
                    onClick={ upload } 
                    disabled={ UploadButtonDisabled }
                  >
                    Đăng bài
                  </button>
                </div>
                <CategoriesUpload categoriesList={ list => { setCategoriesList(list) } } />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
