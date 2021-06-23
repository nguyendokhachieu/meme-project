import "./options.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import Delete from "./Delete";

export default function Options({ 
  comment 
}) 
{
  const optionRef = useRef();
  const [show, setShow] = useState(false);

  const clickEventCallback = useCallback(e => {
    optionRef.current && !optionRef.current.contains(e.target) && setShow(false);
  }, []);

  useEffect(() => {
   document.addEventListener('click', clickEventCallback);
   
   return () => {
     document.removeEventListener('click', clickEventCallback);
   }
  });

  return (
    <a className="comment-options" ref={ optionRef } >
      <i className="fal fa-ellipsis-h-alt icon" onClick={ e => { setShow(prev => !prev) } }></i>
      <section className={ show ? 'options-select show' : 'options-select' }>
        <h6 className="title">Tùy chọn bình luận</h6>
        <ul className="options">
          <Delete 
            comment={ comment }
            hideCommentOptions={ val => { val && setShow(false) } } 
            hideDeleteConfirmBox={ !show } 
          />
        </ul>
      </section>
    </a>
  );
}
