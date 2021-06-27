import "./create-new-categories.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { actShowNotificationCard } from "../../../../store/notifications/actions";
import { actCreateNewCategoryAsync } from "../../../../store/categories/actions";

export default function CreateNewCategories() 
{
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const createNewCategory = async e => {
    e.preventDefault();

    if (loading) return;

    if (content === '') {
      dispatch(actShowNotificationCard("Nội dung rỗng"));
      return;
    }

    if (content.length > 50) {
      setContent('');
      dispatch(actShowNotificationCard("Vui lòng nhập tối đa 50 ký tự"));
      return;
    }

    setContent('');
    setShowForm(false);
    setLoading(true);

    dispatch(actCreateNewCategoryAsync(content)).then(response => {
      setLoading(false);

      if (response.ok) dispatch(actShowNotificationCard("Thêm danh mục thành công"));
      else dispatch(actShowNotificationCard(response.message));
    })
  }

  useEffect(() => {
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 400);
  }, [showForm]);

  return (
    <section className="create-new-categories-section">
      <h4 
        className="title" 
        title="Đề xuất một danh mục"
      >
        Đề xuất một danh mục
      </h4>
      <div className="inner">
        <p className="caption">
          <span className="text">Thêm một danh mục vào danh sách trên</span>
        </p>
        <div className="create">
          <button 
            className="btn create-new-btn" 
            onClick={ () => { setShowForm(true) } }
          >
            {
              loading
                ? <i className="fa fa-spinner fa-spin icon"></i>
                : <i className="fal fa-plus icon"></i>
            }
            <form 
              className={ showForm ? "create-new-form show" : "create-new-form" }
              onSubmit={ createNewCategory }
              >
              <input 
                type="text" 
                className="create-new-input" 
                placeholder="Số ký tự tối đa là 50" 
                ref={ inputRef }
                value={ content }
                onChange={ e => { setContent(e.target.value) } }
              />
            </form>
          </button>
        </div>
        {
          showForm
            ? (
              <div className="allow-no-of-characters">
                {
                  content.length > 50 
                    ? <i className="fad fa-times-circle icon excess"></i>
                    : <i className="fad fa-check-circle icon ok"></i>
                }          
                { content.length } / 50
              </div>
            )
            : null
        }
      </div>
    </section>
  );
}
