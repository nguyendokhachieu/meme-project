import { useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import DetailPostPage from "./pages/DetailPostPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UploadPage from "./pages/UploadPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/assets/js/main.js";
    
    document.body.append(scriptTag);
  }, []);

  return (
    <BrowserRouter>
      <div className="body-wrapper">
        <Switch>
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
    </BrowserRouter>
  );
}

export default App;
