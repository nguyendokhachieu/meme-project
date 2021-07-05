import "./drop-view.scss";

import { useEffect, useState } from "react";
import { useScrolledPercentage } from "../../../hooks/useScrolledPercentage";

export default function ProfileDropView() 
{
  const [showProfileDropView, setShowProfileDropView] = useState(false);
  const { scrolledPercentY } = useScrolledPercentage();

  useEffect(() => {
    (scrolledPercentY > 7) ? setShowProfileDropView(true) : setShowProfileDropView(false);
  }, [scrolledPercentY])

  return (
    <section className={ showProfileDropView ? "drop-view show" : "drop-view"}>
        <div className="container">
            <div className="wrap">
                <div className="icon-wrap">
                    <i className="fad fa-user-friends icon"></i>
                </div>
                <span className="text">Gợi ý theo dõi</span>
            </div>
        </div>
    </section>
  );
}
