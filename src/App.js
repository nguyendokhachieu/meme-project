import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import DetailPostPage from "./pages/DetailPostPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UploadPage from "./pages/UploadPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotificationPage from "./pages/NotificationPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import NotificationCard from "./components/shared/NotificationCard";
import LoadingGlobal from "./components/shared/LoadingGlobal";
import EditPostModal from "./components/PostItem/Options/Edit/EditPostModal";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actHideNotificationCard } from "./store/notifications/actions";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isShowHeader = !['/login', '/register'].includes(pathname);
  const { show, content } = useSelector(state => state.notifications);

  useEffect(() => {
    show && setTimeout(() => {
      dispatch(actHideNotificationCard());
    }, 5000);
  }, [show]);

  return (
      <div className="body-wrapper">
        {
          isShowHeader 
            ? <Header />
            : null
        }
        <Switch>
          <Route path="/notifications"><NotificationPage /></Route>
          <Route path="/search"><SearchPage /></Route>
          <Route path="/categories"><CategoriesPage /></Route>
          <Route path="/upload"><UploadPage /></Route>
          <Route path="/update"><UpdateProfilePage /></Route> 
          <Route path="/register"><RegisterPage /></Route>
          <Route path="/profile"><ProfilePage /></Route> 
          <Route path="/login"><LoginPage /></Route>
          <Route path="/post/:postID"><DetailPostPage /></Route>
          <Route path="/change-password"><ChangePasswordPage /></Route>
          <Route path="/" exact><HomePage /></Route>
          <Route><NotFoundPage /></Route>
        </Switch>
        <NotificationCard 
          show={ show }
          content={ content }
        />
        <LoadingGlobal />
        <EditPostModal />
      </div>
  );
}

export default App;
