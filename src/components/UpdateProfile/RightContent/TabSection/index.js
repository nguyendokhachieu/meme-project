import { useSelector } from "react-redux";
import TabItem from "../TabItem";
import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export default function TabSection({
    id,
    title,
}) 
{
  const { user } = useSelector(state => state);

  return (
    <section id={ id } className="tab-section">
      <h3 className="tab-title">{ title }</h3>
      <div className="inner-container">
        <TabItem 
          name="Họ và tên"
          rendered={ user.name || '' }
          formType="text"
        />
        <TabItem 
          name="Giới tính"
          rendered={ Number(user.sex) && Number(user.sex) === 1 ? 'Nam' : 'Nữ' }
          formType="select"
        />
        <TabItem 
          name="Sinh nhật"
          rendered={ dayjs(user.birthday).format(`DD - MM + YYYY`).replace('-', 'tháng').replace('+', 'năm') }
          formType="date"
        />
      </div>
    </section>
  );
}
