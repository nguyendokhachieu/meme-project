import "./form-upload.scss";
import { useEffect, useState } from "react";
import TextArea from "../../shared/TextArea";

export default function FormUpload({
  onFile = function() {},
  onStatus = function() {},
}) {
  const [status, setStatus] = useState('');
  const [file, setFile] = useState({name: ''});

  useEffect(() => {
    onFile(file);
    onStatus(status);
  }, [file, status, onFile, onStatus]);

  return (
    <form className="form-group">
      <div className="form-control-wrap">
        <label className="label-text" htmlFor="caption">
          <i className="fal fa-plus-circle icon"></i>
          Bài viết mới
        </label>
        <textarea
          name="caption"
          id="caption"
          className="form-control caption-input"
          placeholder="Bạn đang nghĩ gì?"
          onChange={ e => { setStatus(e.target.value) } }
          value={ status }
          rows={ 10 }
          cols={ 1 }
        />
      </div>
      <div className="form-control-wrap form-file-wrap">
        <i className="fad fa-upload icon"></i>
        <label className="label-text" htmlFor="file">
          Thêm hình ảnh
        </label>
        <input 
          type="file" 
          name="file" 
          id="file" 
          hidden
          onChange={ e => { setFile(e.target.files[0]) } }/>
      </div>
      <div align="center" className="filename-preview">
        Hình ảnh: 
        {
          !file.name
            ? <span>Chưa chọn hình!</span>
            : <span>{ file.name }</span>
        }
      </div>
    </form>
  );
}
