import "./search.scss";
import PostItem from "../PostItem";

export default function Search() {

    return (
        <div className="main-content">
            <div className="container">
                <section className="search-section">
                    <div className="search-inner-wrap">
                        <div className="search-sidebar">
                            <h2 className="title">
                                Bộ lọc tìm kiếm
                                <i class="fad fa-filter icon"></i>
                            </h2>
                            <div className="search-filter">
                                <div className="order">
                                    <h5 className="cri-title">
                                        Sắp xếp theo:
                                        <i class="fal fa-sort-size-up icon"></i>
                                        <i class="fal fa-sort-size-down icon"></i>
                                    </h5>
                                    <form className="form-group">
                                        <div className="input-wrap">
                                            <input type="radio" name="orderDir" id="ASC" className="order-input" value="ASC" />
                                            <label htmlFor="ASC" className="order-label">Tăng dần</label>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="radio" name="orderDir" id="DESC" className="order-input" value="DESC" />
                                            <label htmlFor="DESC" className="order-label">Giảm dần</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="order">
                                    <h5 className="cri-title">
                                        Sắp xếp bởi:
                                        <i class="fad fa-clock icon"></i>
                                        <i class="fal fa-heart icon"></i>
                                        <i class="fal fa-comment icon"></i>
                                    </h5>
                                    <form className="form-group">
                                        <div className="input-wrap">
                                            <input type="radio" name="orderBy" id="created_at" className="order-input" value="created_at" />
                                            <label htmlFor="created_at" className="order-label">Thời gian đăng bài</label>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="radio" name="orderBy" id="liked_count" className="order-input" value="liked_count" />
                                            <label htmlFor="liked_count" className="order-label">Số lượt thả tym</label>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="radio" name="orderBy" id="total_comments" className="order-input" value="total_comments" />
                                            <label htmlFor="total_comments" className="order-label">Số lượt bình luận</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="search-results">
                            <h2 className="title">
                                <i class="fad fa-poll-people icon"></i>
                                Kết quả tìm kiếm
                            </h2>
                            <div className="results-list">
                                <PostItem />
                                <PostItem />
                            </div>
                            <div className="load-more">
                                <button className="load-more-btn">Tải thêm bài viết</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}