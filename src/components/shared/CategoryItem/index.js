import { Link } from "react-router-dom";
import "./style.css";

export default function CategoryItem() {
  return (
    <Link to={ `/categories?id=` } class="tags-item">
      <span class="tags-text">Backend</span>
    </Link>
  );
}
