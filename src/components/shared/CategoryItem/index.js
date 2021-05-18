import { Link } from "react-router-dom";
import "./style.css";

export default function CategoryItem({
  category
}) 
{
  if (!category) {
    return null;
  }

  return (
    <Link to={ `/categories?id=${ category.id }` } class="tags-item">
      <span class="tags-text">{ category.name }</span>
    </Link>
  );
}
