export default function FormUpload() {
  return (
    <form action className="form-group">
      <div className="form-control-wrap">
        <label className="label-text" htmlFor="caption">
          <i class="fal fa-plus-circle plus-icon"></i>
          Bài viết mới
        </label>
        <textarea
          type="text"
          name="caption"
          id="caption"
          className="form-control caption-input"
          placeholder="Bạn đang nghĩ gì?"
          rows={9}
        />
      </div>
      <div className="form-control-wrap form-file-wrap">
        <i class="fad fa-upload upload-icon"></i>
        <label className="label-text label-text-file" htmlFor="file">
          Chọn hình ảnh từ máy tính
        </label>
        <input type="file" name="file" id="file" className="btn" />
      </div>
    </form>
  );
}
