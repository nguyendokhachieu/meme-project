import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  useEffect(() => {
    const menuInput = document.getElementById("menu-input");

    document.addEventListener("click", (e) => {
      if (e.target.className === "title-link") {
        menuInput.checked = false;
      }
    });
  }, []);
    return (
      <h1 className="side-bar-page-title">
        <Link to="/" className="title-link">Meme</Link>
      </h1>
    );
  }
  