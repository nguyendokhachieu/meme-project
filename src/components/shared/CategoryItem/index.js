import { Link } from "react-router-dom";
import Modal from "../Modal";
import { PostService } from "../../../services/posts";
import "./style.scss";
import { useState } from "react";

export default function CategoryItem({
  category,
  small = false,
}) 
{
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [modalTitle, setModalTitle] = useState('');

  if (!category) {
    return null;
  }

  const handleClick = async (id) => {
    setShowModal(!showModal);

    if (loading) {
      return;
    }

    setLoading(true);

    const response = await PostService.getPostsByCategoryId({
      category_id: id,
      page: 1,
      per_page: 5,
    });

    setModalTitle('Danh sách các bài viết thuộc danh mục');
    setPosts(response.data.data);
    setLoading(false);
  }

  return (
    <>
      {
        showModal
          ? <Modal 
              loading={ loading }
              setOuterShowState={ val => { setShowModal(false) } }
              list={ posts }
              title={ modalTitle }
              type="postItem"
            />
          : null
      }
      <Link 
      to={ `/categories` } 
      class={ small ? 'tags-item size-small' : 'tags-item' }
      onClick={ () => { handleClick(category.id) } }
      >
        <span class="tags-text">{ category.name }</span>
      </Link>
    </>
  );
}
