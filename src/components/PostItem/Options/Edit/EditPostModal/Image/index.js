import "./image.scss";
import { useEffect, useState } from "react";

export default function Image({
  fetchingFirst,
  onImgURL = function() {},
  onDeleteCurrentImage = function() {},
  onFile = function() {},
  file,
  deleteCurrentImage,
  imgURL,
}) 
{
  const [innerImgURL, setInnerIMGURL] = useState(null);
  const [innerFile, setInnerFile] = useState(null);
  const [innerDeleteCurrentImage, setInnerDeleteCurrentImage] = useState(false);

  useEffect(() => {
    onImgURL(innerImgURL);
  }, [innerImgURL]);

  useEffect(() => {
    onFile(innerFile);
  }, [innerFile]);

  useEffect(() => {
    onDeleteCurrentImage(innerDeleteCurrentImage);
  }, [innerDeleteCurrentImage]);

  useEffect(() => {
    setInnerFile(file);
  }, [file]);

  useEffect(() => {
    setInnerDeleteCurrentImage(deleteCurrentImage);
  }, [deleteCurrentImage]);

  useEffect(() => {
    setInnerIMGURL(imgURL);
  }, [imgURL]);

  return (
    <>
        {
          fetchingFirst
            ? <div className="post-image-wrap-fetching"></div>
            : (
                <div className="post-image-wrap">
                  <div className="post-image">
                    {
                      innerImgURL 
                        ? <img src={ innerImgURL } className="img" alt="img" />
                        : <div className="no-img">Chưa có hình!</div>
                    }
                    
                  </div>
                  <div className="post-image-options">
                    <span className={ innerImgURL ? 'option' : 'option disabled' }>
                      <form className="form">
                        <label htmlFor="checkbox" className="label">
                          <i className="fad fa-trash-alt icon delete-icon"></i>
                          {
                            innerDeleteCurrentImage ? 'Hoàn tác' : 'Xóa hình ảnh này'
                          }
                          {
                            innerDeleteCurrentImage
                              ? (
                                <span className="deleted">
                                  <i className="fad fa-check-circle icon"></i>
                                  Đã chọn xóa hình ảnh hiện tại
                                </span>
                              )
                              : null
                          }
                        </label>
                        <input 
                          type="checkbox" 
                          hidden 
                          className="input" 
                          id="checkbox" 
                          onChange={ e => { setInnerDeleteCurrentImage(e.target.checked) } } 
                        />
                      </form>
                    </span>
                    <span className={ !innerImgURL ? 'option' : 'option disabled' }>
                      <form className="form"> 
                        <label htmlFor="image" className={ innerFile ? 'label disabled' : 'label' }>
                          
                          {
                            !innerFile
                              ? <><i class="fad fa-plus-circle icon add-icon"></i>Thêm hình ảnh mới</>
                              : null 
                          }
                          {
                            innerFile
                              ? (
                                <span className="added">
                                  <i className="fad fa-check-circle icon"></i>
                                  Đã chọn 1 hình ảnh
                                </span>
                              )
                              : null
                          }
                        </label>
                        {
                          innerFile 
                            ? (
                              <span className="added" onClick={ e => { setInnerFile(null); e.stopPropagation() } }>
                                <i class="fal fa-times-circle dismiss-icon"></i>
                                Bỏ chọn
                              </span>
                            )
                            : null
                        }
                        <input 
                          type="file" 
                          hidden 
                          className="input" 
                          id="image" 
                          onChange={ e => { setInnerFile(e.target.files[0]) } } 
                        />
                      </form>
                    </span>
                  </div>
                </div>
              )
        }
    </>
  );
}
