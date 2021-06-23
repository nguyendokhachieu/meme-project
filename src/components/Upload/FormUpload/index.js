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
  }, [file, status]);

  return (
    <form className="form-group">
      <div className="form-control-wrap">
        <label className="label-text" htmlFor="caption">
          <i className="fal fa-plus-circle icon"></i>
          Bài viết mới
        </label>
        <TextArea
          name="caption"
          id="caption"
          className="form-control caption-input"
          placeholder="Bạn đang nghĩ gì?"
          onChange={ val => { setStatus(val) } }
          value={ status }
          rows={9}
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
