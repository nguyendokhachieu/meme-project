import "./upload.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormUpload from "./FormUpload";
import ImagePreview from "./ImagePreview";
import CategoriesUpload from "./CategoriesUpload";
import UploadButton from "./UploadButton";

import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function Upload() {
  const dispatch = useDispatch();
  const [file, setFile] = useState({name: ''});
  const [status, setStatus] = useState('');
  const { list } = useSelector(state => state.categories.selectedUpload);
  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      if (list.length > 0 || file.name !== '' || status.trim().length !== 0) return true;
      return null;
    };
  });

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
                <UploadButton 
                  file={ file }
                  status={ status }
                />
                <CategoriesUpload />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
