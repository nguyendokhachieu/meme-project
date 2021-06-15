import { useSelector } from "react-redux";
import "./load-global.scss";

export default function LoadingGlobal() {
    const { show } = useSelector(state => state.loading);
    
    return (
        <div className="loading-global">
            <div className={ show ? 'inner-load show' : 'inner-load' }>
                <i className="fa fa-spinner fa-spin icon"></i>
            </div>
        </div>
    );
}