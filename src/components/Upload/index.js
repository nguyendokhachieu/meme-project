import "./upload.scss";

import { useState } from "react";

import FormUpload from "./FormUpload";
import ImagePreview from "./ImagePreview";
import CategoriesUpload from "./CategoriesUpload";
import UploadButton from "./UploadButton";

export default function Upload() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [file, setFile] = useState({name: ''});
  const [status, setStatus] = useState('');

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
                  categoriesList={ categoriesList }
                />
                <CategoriesUpload categoriesList={ list => { setCategoriesList(list) } } />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
