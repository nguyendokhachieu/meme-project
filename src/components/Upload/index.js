import "./upload.scss";

import FormUpload from "./FormUpload";
import ImagePreview from "./ImagePreview";
import CategoriesUpload from "./CategoriesUpload";
import { useEffect, useState } from "react";
import { PostService } from "../../services/posts";
import { useHistory } from "react-router";
import NotificationCard from "../shared/NotificationCard";

export default function Upload() {
  const history = useHistory();
  const [hasErrors, setHasErrors] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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
        setSuccess(false);
        setHasErrors(false);

        const response = await PostService.upload(frm);

        if (response.data.status === 404) {
          setHasErrors(true);
          setStatusText(response.data.message);
        } else {
          setSuccess(true);
          setStatusText(response.data.message + ", đang quay về trang chủ");
          
          setTimeout(() => {
            history.push('/');
          }, 1500);
        }
        
      } catch (error) {
        setHasErrors(true);
      }      
    }
  }

  useEffect(() => {
    setHasErrors(false);
    setSuccess(false);
    
    if (status.length !== 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    if (file.name.length !== 0) {
      setIsButtonDisabled(false);
    }
  }, [status, file]);

  return (
    <div className="main-content">
      <NotificationCard 
        show={ hasErrors || success }
        content={ statusText }
        showCloseButton={ true }
      />
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
                    className={ isButtonDisabled ? 'btn btn-filled-bc upload-btn-disabled' : 'btn btn-filled-bc' }
                    onClick={ upload } 
                    disabled={ isButtonDisabled }
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
