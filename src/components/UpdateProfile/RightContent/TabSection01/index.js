import { useSelector } from "react-redux";
import Username from "./Username";
import Fullname from "./Fullname";
import Gender from "./Gender";
import Birthday from "./Birthday";
import AccountCreatedAt from "./AccountCreatedAt";
import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export function TabSection01() 
{
  const { user } = useSelector(state => state);

  return (
    <section id="01-general" className="tab-section">
      <h3 className="tab-title">Thông tin chung tài khoản</h3>
      <div className="inner-container">
        <Username rendered={ user.username || <i className="fa fa-spinner fa-spin"></i> } showEditButton={ false } />
        <Fullname rendered={ user.name || <i className="fa fa-spinner fa-spin"></i> } />
        <Gender rendered={ !user.sex ? <i className="fa fa-spinner fa-spin"></i> : Number(user.sex) === 1 ? 'Nam' : 'Nữ' } />
        <Birthday rendered={ !user.birthday ? <i className="fa fa-spinner fa-spin"></i> : dayjs(user.birthday).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') } />
        <AccountCreatedAt rendered={ !user.created_at ? <i className="fa fa-spinner fa-spin"></i> : dayjs(user.created_at).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') } />
      </div>
    </section>
  );
}
