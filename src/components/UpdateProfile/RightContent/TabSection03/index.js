import { useSelector } from "react-redux";

import Description from "./Description";
import Avatar from "./Avatar";

export function TabSection03() 
{
  const { user } = useSelector(state => state);

  return (
    <section id="03-profile" className="tab-section">
      <h3 className="tab-title">Trang cá nhân</h3>
      <div className="inner-container">
        <Description rendered={ user.description } />
        <Avatar rendered={ user.img_url } />
      </div>
    </section>
  );
}
