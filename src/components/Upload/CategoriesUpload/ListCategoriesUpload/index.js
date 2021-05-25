import { useEffect, useState } from "react";
import { CategoryService } from "../../../../services/categories";

export default function ListCategoriesUpload({
  categoriesList = function() {},
}) {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [selectedCate, setSelectedCate] = useState([]);

  const handleSelectedCategories = (e) => {
    if (e.target.checked) {
      setSelectedCate([...selectedCate, Number(e.target.value)]);
    } else {
      setSelectedCate(selectedCate.filter(cat => {
        if (Number(e.target.value) !== cat) {
          return cat;
        }
      }));
    }
  }
  
  const handleLoadMore = async () => {
    if (isLoading) {
      return;
    }

    if (categories.length >= totalItems) {
      setHasMoreItems(false);
    }

    setIsLoading(true);
    const res = await CategoryService.getCategoriesPagination({
      page: page + 1,
      per_page: 5
    });

    setPage(page + 1);
    setIsLoading(false);
    if (res.data.data.length !== 0) {
      setCategories([...categories, ...res.data.data]);
    }
  }

  useEffect(async () => {
    setIsLoading(true);

    const res = await CategoryService.getCategoriesPagination({
      page: page,
      per_page: 5
    });

    setTotalItems(Number(res.data.total_categories));

    setIsLoading(false);
    if (res.data.data.length !== 0) {
      setCategories(page === 1 
        ? res.data.data 
        : [...categories, ...res.data.data]
      );
    }
  }, []);

  useEffect(() => {
    categoriesList(selectedCate);
  }, [selectedCate]);

  return (
    <>
      <form>
        {
          categories.length !== 0
            ? categories.map(cate => {
              return (
                <label className="checkbox-label">
                    { cate.name }
                    <input type="checkbox" className="checkbox-input" value={ cate.id } onChange={ handleSelectedCategories } />
                    <span className="mark" />
                </label>
              )
            })
            : null
        }
    </form>
    {
      hasMoreItems 
        ? (
          <div align="center">
            <button className="btn-load-more-categories" onClick={ handleLoadMore }>
                { isLoading ? <i class="fa fa-spinner fa-spin"></i> : "Tải thêm" }
            </button>
          </div>
        )
        : null
    }
    </>
  );
}
