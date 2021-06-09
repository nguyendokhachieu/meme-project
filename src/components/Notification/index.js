import "./notification.scss";
import NotificationItem from "../Header/HeaderBtn/Notification/NotificationItem";
import NotificationItemLoading from "../Header/HeaderBtn/Notification/NotificationItem/NotificationItemLoading";
import { useAuthorization } from "../../hooks/useAuthorization";
import { NotificationService } from "../../services/notifications";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Notification() {
    const { auth } = useAuthorization();
    const [showThis, setShowThis] = useState(true);
    const { id } = useSelector(state => state.user);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!auth) {
            setShowThis(false);
        } else {
            setShowThis(true);
        }
    }, [auth]);

    useEffect(async () => {
        setLoading(true);
        const response = await NotificationService.getAll(id);

        setLoading(false);
        setList(response.data.data || []);
    }, [id]);

    if (!showThis) {
        return null;
    }

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
                                                return <NotificationItem notification={ item } key={ item } />
                                            })
                                        )
                            }
                        </div>
                        <div className="end">
                            <p className="text">
                                <i class="fad fa-bell-slash icon"></i>
                                Không còn thông báo nào!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}