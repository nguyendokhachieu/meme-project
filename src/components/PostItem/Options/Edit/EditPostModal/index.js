import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Title from "./Title";
import TextAreaContent from "./TextAreaContent";
import Image from "./Image";
import Submit from "./Submit";

import { actHideEditModal } from "../../../../../store/modals/actions";
import { PostService } from "../../../../../services/posts";


export default function EditPostModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const { showEditModal, postID } = useSelector(state => state.modals);

  const [content, setContent] = useState('');
  const [imgURL, setIMGURL] = useState(null);
  const [file, setFile] = useState(null);
  const [deleteCurrentImage, setDeleteCurrentImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingFirst, setFetchingFirst] = useState(false);

  const clickEventCallback = e => {
      showEditModal 
        && modalRef.current 
          && !modalRef.current.contains(e.target) 
            && dispatch(actHideEditModal());
  }

  useEffect(() => {
    async function get() {
      if (postID) {
        setFetchingFirst(true);
        
        const response = await PostService.getDetailPostById(postID);
  
        setFetchingFirst(false);
        setContent(response.data.data[0].content);
        setIMGURL(response.data.data[0].img_url ? response.data.data[0].img_url : null);
        setFile(null);
        setDeleteCurrentImage(false);
      }
    }

    get();
  }, [postID]);

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showEditModal ? 'edit-modal' : 'edit-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title loading={ loading } />
        <div className="content">
          <TextAreaContent 
            content={ content } 
            onContent={ c => { setContent(c) } } 
            fetchingFirst={ fetchingFirst } 
          />
          <Image 
            fetchingFirst={ fetchingFirst }
            onFile={ f => { setFile(f) } }
            onDeleteCurrentImage={ d => { setDeleteCurrentImage(d) } }
            onImgURL={ i => { setIMGURL(i) } }
            file={ file }
            deleteCurrentImage={ deleteCurrentImage }
            imgURL={ imgURL }
          />
          <Submit 
            fetchingFirst={ fetchingFirst }
            deleteCurrentImage={ deleteCurrentImage }
            content={ content }
            imgURL={ imgURL }
            file={ file }
            postID={ postID }
            isLoading={ loadingState => { setLoading(loadingState) } }
          />
        </div>
      </div>
    </div>
  );
}
