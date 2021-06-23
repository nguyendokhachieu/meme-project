import "./modal.scss";

import { useEffect, useState } from "react";
import ModalUserItem from "../ModalUserItem";
import ModalPostItem from "../ModalPostItem";

const className = "float-modal-wrap";

export default function Modal({
    title = '',
    list = [],
    loading = false,
    setOuterShowState = function(){},
    setOuterLoadingState = function(){},
    hasErrors = false,
    type = 'userItem',
}) {
    const [innerHide, setInnerHide] = useState(false);

    const renderList = (list) => {
        const arrayRendered = [];
        const listLength = list.length;
        
        for (let i = 0; i < listLength; i++) {
            if (type === 'userItem') {
                arrayRendered.push(
                    <ModalUserItem 
                        key={ i }
                        user={ list[i] } 
                        closeModal={ val => { setInnerHide(true) } } 
                    />
                )
            } else if (type === 'postItem') {
                arrayRendered.push(
                    <ModalPostItem 
                        key={ i }
                        post={ list[i] } 
                        closeModal={ val => { setInnerHide(true) } } 
                    />
                )
            }
        }
        return arrayRendered;
    }

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
                    <i className="fal fa-list"></i>
                    {
                        loading
                            ? <span className="title-loading"></span>
                            : title
                    }
                </h3>
                <div className="inner-modal">
                    {
                        !loading 
                            ? list.length !== 0 
                                ? renderList(list)
                                // list.map(user => {
                                //     return <ModalUserItem 
                                //                 user={ user } 
                                //                 closeModal={ val => { setInnerHide(true) } } 
                                //             />;
                                // })
                                : "Không có ai để hiển thị"
                            : <div align="center"><i className="fad fa-spinner fa-spin spinner-loading-icon"></i></div>
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