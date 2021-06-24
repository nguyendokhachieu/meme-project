import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { actSortComment } from "../../../store/comments/actions";
import "./collapse.scss";

export default function CollapseOptions() 
{
  const dispatch = useDispatch();
  const optionsRef = useRef();
  const [showCollapse, setShowCollapse] = useState(false);
  const [selected, setSelected] = useState('Mới nhất');

  const clickEventCallback = useCallback(e => {
    optionsRef.current && !optionsRef.current.contains(e.target) && setShowCollapse(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  }, [clickEventCallback]);

  return (
    <div className="collapse">
      <span className="selected" onClick={ e => { setShowCollapse(prev => !prev) } } ref={ optionsRef }>
        { selected }
        <i className="fal fa-angle-down icon"></i>
      </span>
      <ul className={ showCollapse ? 'options show' : 'options' } >
        <li className="item" onClick={ e => { dispatch(actSortComment('desc')); setSelected('Mới nhất') } }>Mới nhất</li>
        <li className="item" onClick={ e => { dispatch(actSortComment('asc')); setSelected('Cũ hơn trước') } }>Cũ hơn trước</li>
      </ul>
    </div>
  );
}
