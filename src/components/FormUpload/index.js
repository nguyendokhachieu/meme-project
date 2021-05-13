export default function FormUpload() {
  return (
    <form action className="form-group">
      <div className="form-control-wrap">
        <label className="label-text" htmlFor="caption">
          <img
            src="./assets/images/what-on-your-mind-icon.svg"
            className="form-control-icon"
            alt="icon"
          />
        </label>
        <textarea
          type="text"
          name="caption"
          id="caption"
          className="form-control caption-input"
          placeholder="Bạn đang nghĩ gì?"
          rows={9}
          defaultValue={""}
        />
      </div>
      <div className="form-control-wrap form-file-wrap">
        <img
          src="./assets/images/file-upload-icon.svg"
          className="form-control-icon"
          alt="icon"
        />
        <label className="label-text label-text-file" htmlFor="file">
          Chọn hình ảnh từ máy tính
        </label>
        <input type="file" name="file" id="file" className="btn" />
      </div>
    </form>
  );
}
