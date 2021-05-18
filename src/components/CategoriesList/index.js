import "./style.css";
import CategoryItem from "../shared/CategoryItem";

export default function CategoriesList() {
    return (
        <div className="main-col-8">
            <h3 className="featured-posts-header">Danh mục hiện có</h3>
            <p className="notification">
                Đang hiển thị 10/10000 danh mục
            </p>
            <div className="categories-list-wrap">
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
            <div className="load-more-btn-wrap">
              <button className="btn btn-transparent-bc">Tải thêm</button>
            </div>
          </div>
    );
}