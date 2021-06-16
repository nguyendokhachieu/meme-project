import "./modal.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actHideEditModal } from "../../../../../store/modals/actions";

export default function Modal() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [content, setContent] = useState('');
  const { showEditModal } = useSelector(state => state.modals);

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
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showEditModal ? 'edit-modal' : 'edit-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <h4 className="title">
          <i class="fad fa-edit icon"></i>
          Sửa bài viết
        </h4>
        <div className="content">
          <form className="form-group">
            <div className="f-c-wrap">
              <textarea
                className="f-c"
                onChange={ e => { setContent(e.target.value); autoSize(e.target) } }
                rows={1}
                value={ content }
              />
            </div>      
          </form>
          
        </div>
      </div>
    </div>
  );
}
