import { useEffect, useState } from "react";
import "./modal.scss";

const className = "float-modal-wrap";

export default function Modal() {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.className === className) {
                setHide(true);
            }   
        })
    }, []);
    
    return (
        <div className={ hide ? 'float-modal-wrap hide' : 'float-modal-wrap' }>
            <div className="float-modal">
                
            </div>
        </div>
    );
}