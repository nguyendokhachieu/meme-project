import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import DetailPostPage from "./pages/DetailPostPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UploadPage from "./pages/UploadPage";

function App() {

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/assets/js/main.js";
    
    document.body.append(scriptTag);
  }, []);

  return (
    <div className="body-wrapper">
      <HomePage />
    </div>
  );
}

export default App;
