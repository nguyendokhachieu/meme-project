import FormUpload from "../FormUpload";
import ImagePreview from "../ImagePreview";
import CategoriesUpload from "../CategoriesUpload";
import "./style.css";

export default function Upload() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            <div className="upload-area">
              <FormUpload />
              <ImagePreview />
            </div>
          </div>
          <div className="main-col-4">
            <div className="upload-area">
              <div className="btn-upload-wrap">
                <button className="btn btn-filled-bc">Đăng bài</button>
              </div>
              <div className="errors-upload">
                Bạn chưa chọn hình ảnh, hoặc chưa nhập caption, hoặc chưa chọn
                danh mục
              </div>
              <CategoriesUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
