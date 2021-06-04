import { useState } from "react";
import Modal from "./Modal";

export default function Delete({
  id
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {
        showModal ? <Modal reset={ val => { setShowModal(false) } } id={ id } /> : null
      }
      <a className="item-link" onClick={ e => { setShowModal(true) } }>
        <i class="fad fa-trash-alt item-icon"></i>
        Xóa bài viết
      </a>
    </>
  );
}
