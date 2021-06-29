import "./options.scss";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


import Delete from "./Delete";
import Edit from "./Edit";
import Save from "./Save";
import ShowCategories from "./ShowCategories";

export default function Options({
  post
}) 
{
  const { id } = useSelector(state => state.user);
  const [isThisPerson, setIsThisPerson] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef();

  useEffect(() => {
    id && post.user_id && id === post.user_id && setIsThisPerson(true);
  }, [id, post.user_id]);

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
    <div className="post-item-options" ref={ optionsRef }>
        <i className="fal fa-ellipsis-v-alt options-icon" onClick={ e => { setShowOptions(prev => !prev) } }></i>
        <div className={ showOptions ? 'options show' : 'options' }>
          <ul className="list-items">
            <li className="option-item public">
              <Save id={ post.id } setShowOptions={ val => { setShowOptions(val) } } />
              <ShowCategories id={ post.id } setShowOptions={ val => { setShowOptions(val) } } />
            </li>
            {
              !isThisPerson 
                ? null
                : (
                  <>
                    <Delete id={ post.id } showOptions={ showOptions } />
                    <Edit id={ post.id } />
                  </>
                )
            }
          </ul>
        </div>
      </div>
  );
}
