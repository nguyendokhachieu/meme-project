import { useEffect, useState } from "react";
import "./textarea.scss";

export default function TextArea({
    className,
    id, 
    name,
    placeholder,
    rows, 
    cols,
    value,
    onChange = function() {},
    ...restProps
}) 
{
    const [innerValue, setInnerValue] = useState('');

    useEffect(() => {
        setInnerValue(value);
    }, [value])

    return (
        <textarea
          name={ name }
          id={ id }
          className={ className }
          placeholder={ placeholder }
          rows={9}
          value={ innerValue }
          onChange={ e => { 
              setInnerValue(e.target.value); 
              onChange(e.target.value) } 
            }
          { ...restProps }
        />
    );
}