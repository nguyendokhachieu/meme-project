import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Title from "./Title";
import Submit from "./Submit";

import { actHideEditModal } from "../../../../../store/modals/actions";
import { PostService } from "../../../../../services/posts";


export default function EditPostModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const { showEditModal, postID } = useSelector(state => state.modals);

  const [content, setContent] = useState('');
  const [imgURL, setIMGURL] = useState(null);
  const [file, setFile] = useState(null);
  const [deleteCurrentImage, setDeleteCurrentImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingFirst, setFetchingFirst] = useState(false);

  const autoSize = elem => {
    elem.style.height = "5px";
    elem.style.height = elem.scrollHeight + "px";
  }

  const clickEventCallback = e => {
      showEditModal 
        && modalRef.current 
          && !modalRef.current.contains(e.target) 
            && dispatch(actHideEditModal());
  }

  useEffect(() => {
    async function get() {
      if (postID) {
        setFetchingFirst(true);
        
        const response = await PostService.getDetailPostById(postID);
  
        setFetchingFirst(false);
        setContent(response.data.data[0].content);
        setIMGURL(response.data.data[0].img_url ? response.data.data[0].img_url : null);
        setFile(null);
        setDeleteCurrentImage(false);
      }
    }

    get();
  }, [postID]);

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showEditModal ? 'edit-modal' : 'edit-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title loading={ loading } />
        <div className="content">
          <form className="form-group">
            <div className="f-c-wrap">
              {
                fetchingFirst
                  ? <span className="text-area-fetching"></span>
                  : (
                      <textarea
                        className="f-c"
                        onChange={ e => { setContent(e.target.value); autoSize(e.target) } }
                        // rows={ 1 }
                        value={ content }
                      />
                  )
              }
            </div>      
          </form>
          {
            fetchingFirst
              ? <div className="post-image-wrap-fetching"></div>
              : (
                  <div className="post-image-wrap">
                    <div className="post-image">
                      {
                        imgURL 
                          ? <img src={ imgURL } className="img" alt="img" />
                          : <div className="no-img">Chưa có hình!</div>
                      }
                      
                    </div>
                    <div className="post-image-options">
                      <span className={ imgURL ? 'option' : 'option disabled' }>
                        <form className="form">
                          <label htmlFor="checkbox" className="label">
                            <i className="fad fa-trash-alt icon delete-icon"></i>
                            {
                              deleteCurrentImage ? 'Hoàn tác' : 'Xóa hình ảnh này'
                            }
                            {
                              deleteCurrentImage
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
                            onChange={ e => { setDeleteCurrentImage(e.target.checked) } } 
                          />
                        </form>
                      </span>
                      <span className={ !imgURL ? 'option' : 'option disabled' }>
                        <form className="form"> 
                          <label htmlFor="image" className={ file ? 'label disabled' : 'label' }>
                            
                            {
                              !file
                                ? <><i className="fad fa-plus-circle icon add-icon"></i>Thêm hình ảnh mới</>
                                : null 
                            }
                            {
                              file
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
                            file 
                              ? (
                                <span className="added" onClick={ e => { setFile(null); e.stopPropagation() } }>
                                  <i className="fal fa-times-circle dismiss-icon"></i>
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
                            onChange={ e => { setFile(e.target.files[0]) } } 
                          />
                        </form>
                      </span>
                    </div>
                  </div>
                )
          }
          <Submit 
            fetchingFirst={ fetchingFirst }
            deleteCurrentImage={ deleteCurrentImage }
            content={ content }
            imgURL={ imgURL }
            file={ file }
            postID={ postID }
            isLoading={ loadingState => { setLoading(loadingState) } }
          />
        </div>
      </div>
    </div>
  );
}
