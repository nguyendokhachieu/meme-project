import { useSelector } from "react-redux";
import Password from "./Password";
import LastLogin from "./LastLogin";
import LastChangePassword from "./LastChangePassword";
import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export function TabSection02() 
{
  const { user } = useSelector(state => state);

  return (
    <section id="02-privacy" className="tab-section">
      <h3 className="tab-title">Quyền riêng tư</h3>
      <div className="inner-container">
        <Password />
        <LastLogin 
          date={ !user.last_login ? <i class="fa fa-spinner fa-spin"></i> : dayjs(user.last_login).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') }
          time={ !user.last_login ? null : dayjs(user.last_login).format(`hh - mm + s --`).replace('-', 'giờ').replace('+', 'phút').replace('--', 'giây') }
        />
        <LastChangePassword
          date={ !user.last_change_password ? <i class="fa fa-spinner fa-spin"></i> : dayjs(user.last_change_password).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') }
          time={ !user.last_change_password ? null : dayjs(user.last_change_password).format(`hh - mm + s --`).replace('-', 'giờ').replace('+', 'phút').replace('--', 'giây') }
        />
      </div>
    </section>
  );
}
