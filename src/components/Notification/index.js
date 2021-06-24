import "./notification.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NotificationItem from "../Header/HeaderBtn/Notification/NotificationItem";
import NotificationItemLoading from "../Header/HeaderBtn/Notification/NotificationItem/NotificationItemLoading";

import { NotificationService } from "../../services/notifications";

import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function Notification() {
    const { id } = useSelector(state => state.user);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { scrollToTop } = useScrollToTop();

    useEffect(() => {
        async function getAll() {
            setLoading(true);
            const response = await NotificationService.getAll(id);
    
            setLoading(false);
            setList(response.data.data || []);
        }

        getAll();
    }, [id]);

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="main-content">
            <div className="container">
                <section className="all-notifications">
                    <div className="inner-notif-content">
                        <div className="title">
                            <h2>Tất cả thông báo của bạn</h2>
                        </div>
                        <div className="items">
                            {
                                loading
                                    ? <NotificationItemLoading noOfItems={ 8 } />
                                    : list.length === 0
                                        ? <div className="load">Bạn chưa có thông báo nào</div>
                                        : (
                                            list.map(item => {
                                                return <NotificationItem notification={ item } key={ item.created_at } />
                                            })
                                        )
                            }
                        </div>
                        <div className="end">
                            <p className="text">
                                <i className="fad fa-bell-slash icon"></i>
                                Không còn thông báo nào!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}