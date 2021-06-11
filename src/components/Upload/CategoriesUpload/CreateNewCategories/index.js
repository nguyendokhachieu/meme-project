import "./create-new-categories.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CategoryService } from "../../../../services/categories";
import { actShowNotificationCard } from "../../../../store/notifications/actions";

export default function CreateNewCategories({
  reloadCategoriesList = function() {}
}) 
{
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState('');
  const [callingAPI, setCallingAPI] = useState(0);

  const createNewCategory = async e => {
    e.preventDefault();

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
    setCallingAPI(1);

    const response = await CategoryService.createNewCategory(content);

    setCallingAPI(2);

    if (response.data.created_new_category) {
      dispatch(actShowNotificationCard("Thêm danh mục thành công"));
    } else {
      dispatch(actShowNotificationCard(response.data.message));
    }
  }

  useEffect(() => {
    callingAPI === 2 && reloadCategoriesList(Math.random());
  }, [callingAPI]);

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
          <span className="text">Thêm một danh mục có liên quan đến bài viết của bạn mà chưa có trong danh sách trên</span>
        </p>
        <div className="create">
          <button 
            className="btn create-new-btn" 
            onClick={ e => { setShowForm(true) } }
          >
            <i class="fal fa-plus icon"></i>
            <form 
              className={ showForm ? "create-new-form show" : "create-new-form" }
              onSubmit={ createNewCategory }
            >
              <input 
                type="text" 
                className="create-new-input" 
                placeholder="Số ký tự tối đa là 50" 
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
