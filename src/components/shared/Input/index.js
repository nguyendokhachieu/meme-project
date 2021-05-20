import { useEffect } from "react";
import { useState } from "react";

export default function Input({
    type = 'text',
    className = 'form-control',
    placeholder = '',
    required = false,
    value = "",
    onChange = function(){},
    ...restParams
}) {
    const [innerValue, setInnerValue] = useState('');

    useEffect(() => {
        setInnerValue(value);
    }, [value]);

    return <input 
                type={ type } 
                placeholder={ placeholder }
                required={ required }
                className={ className }
                onChange={ e => { 
                    setInnerValue(e.target.value); 
                    onChange(e.target.value); 
                    } 
                }
                value={ innerValue }
                { ...restParams }
        />;
}