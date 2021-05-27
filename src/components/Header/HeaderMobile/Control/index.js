import { useEffect } from "react";

export default function Control() {
  useEffect(() => {
    const menuInput = document.getElementById("menu-input");

    document.addEventListener("click", (e) => {
      if (e.target.className === "header-overlay" || e.target.className.includes("close-icon")) {
        menuInput.checked = false;
      }
    });
  }, []);

  return (
    <>
      <label htmlFor="menu-input" className="menu-input-label">
        <i class="fad fa-bars menu-input-icon"></i>
      </label>
      <input type="checkbox" hidden className="menu-input" id="menu-input" />
      <div className="header-overlay"></div>
    </>
  );
}
