import "./textarea-content.scss";

import { useEffect, useState } from "react";

export default function TextAreaContent({
  onContent = function() {},
  content,
  fetchingFirst,
}) 
{
  const [innerContent, setInnerContent] = useState('');

  const autoSize = elem => {
    elem.style.height = "5px";
    elem.style.height = elem.scrollHeight + "px";
  }

  useEffect(() => {
    onContent(innerContent);
  }, [innerContent, onContent]);

  useEffect(() => {
    setInnerContent(content);
  }, [content]);

  return (
    <form className="form-group">
      <div className="f-c-wrap">
        {
          fetchingFirst
            ? <span className="text-area-fetching"></span>
            : (
                <textarea
                  className="f-c"
                  onChange={ e => { setInnerContent(e.target.value); autoSize(e.target) } }
                  rows={ 1 }
                  value={ innerContent }
                />
            )
        }
      </div>      
    </form>
  );
}
