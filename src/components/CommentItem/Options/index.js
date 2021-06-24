import "./options.scss";

import { useEffect, useRef, useState } from "react";

import Delete from "./Delete";

export default function Options({
  comment
}) 
{
  const optionsRef = useRef();
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handleShowOptions = (e) => {
        optionsRef.current && !optionsRef.current.contains(e.target) && setShowOptions(false);
    }

    document.addEventListener('click', handleShowOptions);

    return () => {
      document.removeEventListener('click', handleShowOptions);
    }
  });

  return (
    <div className="comment-options" ref={ optionsRef }>
      <button className="btn btn-options" onClick={ e => { setShowOptions(prev => !prev) } }>
        <i className="fas fa-ellipsis-v icon"></i>
      </button>
      <div className={ showOptions ? 'options show' : 'options' }>
        <ul className="list-items">
          <Delete setShowOptions={ val => setShowOptions(val) } comment={ comment } />
        </ul>
      </div>
    </div>
  );
}
