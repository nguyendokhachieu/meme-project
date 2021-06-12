import { useCallback } from "react";
import { Link } from "react-router-dom";

export default function HeaderLogo() {

  const scrollToTop = useCallback(() => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 16);
      }
    }
  );

    return (
        <div className="header-logo" onClick={ scrollToTop }>
          <Link to="/" className="header-logo-link">
            Meme
          </Link>
        </div>
    );
}