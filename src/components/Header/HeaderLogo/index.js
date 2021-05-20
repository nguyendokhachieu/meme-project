import { Link } from "react-router-dom";

export default function HeaderLogo() {
    return (
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            Meme
          </Link>
        </div>
    );
}