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

function App() {
  const { pathname } = useLocation();
  const isShowHeader = !['/login', '/register'].includes(pathname);

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
      </div>
  );
}

export default App;
