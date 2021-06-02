import { useSelector } from "react-redux";
import TabItem from "../TabItem";
import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const gender = [
  {
    'id': -1,
    'val': 'Chọn giới tính'
  },
  {
    'id': 1,
    'val': 'Nam'
  },
  {
    'id': 0,
    'val': 'Nữ'
  }
];

export function TabSection01() 
{
  const { user } = useSelector(state => state);

  return (
    <section id="01-general" className="tab-section">
      <h3 className="tab-title">Thông tin chung tài khoản</h3>
      <div className="inner-container">
        <TabItem 
          name="Username"
          rendered={ user.username || <i class="fa fa-spinner fa-spin"></i> }
          showEditButton={ false }
        />
        <TabItem 
          name="Họ và tên"
          rendered={ user.name || <i class="fa fa-spinner fa-spin"></i> }
          formType="text"
        />
        <TabItem 
          name="Giới tính"
          rendered={ !user.sex ? <i class="fa fa-spinner fa-spin"></i> : Number(user.sex) === 1 ? 'Nam' : 'Nữ' }
          formType="select"
          formData={ gender }
        />
        <TabItem 
          name="Sinh nhật"
          rendered={ !user.birthday ? <i class="fa fa-spinner fa-spin"></i> : dayjs(user.birthday).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') }
          formType="date"
        />
        <TabItem 
          name="Tạo tài khoản vào"
          rendered={ !user.created_at ? <i class="fa fa-spinner fa-spin"></i> : dayjs(user.created_at).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') }
          showEditButton={ false }
        />
      </div>
    </section>
  );
}
