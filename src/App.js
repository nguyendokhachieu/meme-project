import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import SavedPostsPage from "./pages/SavedPostsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NotificationCard from "./components/shared/NotificationCard";
import LoadingGlobal from "./components/shared/LoadingGlobal";
import EditPostModal from "./components/PostItem/Options/Edit/EditPostModal";
import DeletePostModal from "./components/PostItem/Options/Delete/DeletePostModal";

import { actHideNotificationCard } from "./store/notifications/actions";
import { actSetHomePageTabs } from "./store/posts/actions";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { show, content, showLink, href, linkContent } = useSelector(state => state.notifications);
  
  const isShowHeader = !['/login', '/register'].includes(pathname);

  useEffect(() => {
    show && setTimeout(() => {
      dispatch(actHideNotificationCard());
    }, 5000);
  }, [show]);

  useEffect(() => {
    localStorage.getItem('home-tab') 
      ? dispatch(actSetHomePageTabs(localStorage.getItem('home-tab')))
      : localStorage.setItem('home-tab', 'latest');
  }, []);

  return (
      <div className="body-wrapper">
        {
          isShowHeader 
            ? <Header />
            : null
        }
        <Switch>
          <Route path="/notifications"><NotificationPage /></Route>
          <Route path="/saved"><SavedPostsPage /></Route>
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
          showLink={ showLink }
          href={ href }
          linkContent={ linkContent }
        />
        <LoadingGlobal />
        <EditPostModal />
        <DeletePostModal />
      </div>
  );
}

export default App;
