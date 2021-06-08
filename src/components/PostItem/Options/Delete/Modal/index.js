import { useEffect, useRef, useState } from "react";
import { PostService } from "../../../../../services/posts";
import NotificationCard from "../../../../shared/NotificationCard";
import "./modal.scss";

export default function Modal({
    reset = function() {},
    id
}) 
{
    const modalRef = useRef();
    const [hidden, setHidden] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [notifContent, setNotifContent] = useState('');

    const handleDelete = async () => {
        setLoading(true);
        const response = await PostService.delete(id);

        setLoading(false);

        if (response.data.deleted) {
            setHidden(true);
            setNotifContent('Đã xóa bài viết thành công');
            setShowNotif(true);

            setTimeout(() => {
                window.location.reload();
            }, 1000);
            
            return;
        }

        setHidden(true);
        setNotifContent('Có lỗi xảy ra, vui lòng thử lại');
        setShowNotif(true);
    }

    useEffect(() => {
        const handle = e => {
            modalRef.current && !modalRef.current.contains(e.target) && setHidden(true);
            modalRef.current && !modalRef.current.contains(e.target) && reset(false);
        }
        document.addEventListener('mousedown', handle);

        return () => {
            document.removeEventListener('mousedown', handle);
        }
    });

    return (
        <>
            {
                showNotif
                    ? (
                        <NotificationCard 
                            content={ notifContent } 
                            showCloseButton={ true } 
                            show={ showNotif } 
                        />
                    )
                    : 
                    null
            }
            <div className={ hidden ? 'delete-modal-wrap hide' : 'delete-modal-wrap' }>
                <div className="float-modal" ref={ modalRef }>
                    <h3 className="modal-title">
                        {
                            loading 
                                ? <i class="fa fa-spinner fa-spin" style={{marginRight: '1rem'}}></i>
                                : <i class="fad fa-trash-alt icon"></i>
                        }
                        Xóa bài viết này ?
                    </h3>
                    <div className="inner-modal">
                        <div className="icon-wrap"><i class="fad fa-exclamation-square icon"></i></div>
                        <h6 className="title">Bài viết sẽ bị xóa vĩnh viễn và không thể khôi phục</h6>
                        <div className="btn-group">
                            <button className="delete btn" onClick={ handleDelete }>Xóa</button>
                            <button className="cancel btn" onClick={ e => { setHidden(true) } }>Hủy bỏ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}