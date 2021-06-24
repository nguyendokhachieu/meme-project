import "./profile-drop-view.scss";

import { useEffect, useState } from "react";
import { useScrolledPercentage } from "../../../hooks/useScrolledPercentage";
import LeftLoading from "./LeftLoading";
import Options from "../../UserProfileInfomation/UserName/Options";
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
                            <div className="avatar-wrap">
                                <img src={ link } className="img" alt="ava" />
                            </div>
                            <span className="fullname">{ userInfo.name }</span>
                        </div>
                    )
            }
            <div className="right">
                <Options />
            </div>
        </div>
    </section>
  );
}
