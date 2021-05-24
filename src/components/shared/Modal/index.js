import "./modal.scss";

import { useEffect, useState } from "react";
import ModalUserItem from "../ModalUserItem";

const className = "float-modal-wrap";

export default function Modal({
    title,
    listUser,
    loading,
    setOuterShowState = function(){},
    setOuterLoadingState = function(){},
    hasErrors,
}) {
    const [innerHide, setInnerHide] = useState(false);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.className === className) {
                setInnerHide(true);
                setOuterShowState(false);
                setOuterLoadingState(true);
            }   
        })
    }, []);

    return (
        <div className={ innerHide ? 'float-modal-wrap hide' : 'float-modal-wrap' }>
            <div className="float-modal">
                <h3 className="modal-title" title={ title }>
                    <i class="fal fa-list"></i>
                    { title }
                </h3>
                <div className="inner-modal">
                    {
                        !loading 
                            ? listUser.length !== 0 
                                ? listUser.map(user => {
                                    return <ModalUserItem 
                                                user={ user } 
                                                closeModal={ val => { setInnerHide(true) } } 
                                            />;
                                })
                                : "Không có ai để hiển thị"
                            : <div align="center"><i class="fad fa-spinner fa-spin spinner-loading-icon"></i></div>
                    }
                    {
                        hasErrors
                            ? <div align="center">Có lỗi xảy ra</div>
                            : null
                    }
                </div>
            </div>
        </div>
    );
}