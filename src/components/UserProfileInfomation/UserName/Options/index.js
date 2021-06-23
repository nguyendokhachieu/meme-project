import "./options.scss";

import { useEffect, useRef, useState } from "react";

import ViewSavedPosts from "./ViewSavedPosts";
import AccountSettings from "./AccountSettings";

export default function Options() 
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
    <div className="options-hamburger" ref={ optionsRef }>
      <button className="btn btn-options" onClick={ e => { setShowOptions(prev => !prev) } }>
        <i className="fas fa-ellipsis-v icon"></i>
      </button>
      <div className={ showOptions ? 'options show' : 'options' }>
        <ul className="list-items">
          <ViewSavedPosts setShowOptions={ val => setShowOptions(val) } />
          <AccountSettings setShowOptions={ val => setShowOptions(val) } />
        </ul>
      </div>
    </div>
  );
}
