import "./profile-drop-view.scss";

import { useEffect, useState } from "react";
import { useScrolledPercentage } from "../../../hooks/useScrolledPercentage";
import LeftLoading from "./LeftLoading";
import { useAvatarLinkSrc } from "../../../hooks/useAvatarLinkSrc";

export default function ProfileDropView({
    loading = false,
    userInfo = {},
}) 
{
  const [showProfileDropView, setShowProfileDropView] = useState(false);
  const { link } = useAvatarLinkSrc(userInfo);

  const { scrolledPercentY } = useScrolledPercentage();

  useEffect(() => {
    (scrolledPercentY > 14) ? setShowProfileDropView(true) : setShowProfileDropView(false);
  }, [scrolledPercentY])

  return (
    <section className={ showProfileDropView ? "profile-drop-view show" : "profile-drop-view"}>
        <div className="container">
            {
                loading
                    ? <LeftLoading />
                    : (
                        <div className="left">
                            <a className="avatar-wrap">
                                <img src={ link } className="img" alt="ava" />
                            </a>
                            <a className="fullname">{ userInfo.name }</a>
                        </div>
                    )
            }
            <div className="right">

            </div>
        </div>
    </section>
  );
}
