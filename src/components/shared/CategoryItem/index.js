import { Link } from "react-router-dom";
import "./style.scss";

export default function CategoryItem({
  category,
  small = false,
}) 
{
  if (!category) {
    return null;
  }

  return (
    <Link to={ `/categories?id=${ category.id }` } class={ small ? 'tags-item size-small' : 'tags-item' }>
      <span class="tags-text">{ category.name }</span>
    </Link>
  );
}
