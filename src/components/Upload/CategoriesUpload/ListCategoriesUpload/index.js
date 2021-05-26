import { useEffect, useState } from "react";
import { CategoryService } from "../../../../services/categories";

export default function ListCategoriesUpload({
  categoriesList = function() {},
}) {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCate, setSelectedCate] = useState([]);

  const totalPage = Math.ceil(totalItems / 5);
  const renderPagination = (totalPage, range) => {

    if (totalPage !== 0) {
      const indents = [];

      let start = page;
      if (range >= totalPage) {
        start = 1;
      }

      let end = page + range;
      if (end > totalPage) {
        end = totalPage;
      }

      for (let i = start; i <= end; i++) {
        indents.push(<li className={ page === i ? `page-item active` : `page-item` } onClick={ () => { handleLoadMore(i) } }>{ i }</li>);
      }

      if (page !== totalPage) {
        indents.push(<li className="page-item inactive">...</li>)
      } 

      return indents;
    }
  }

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

  const handleLoadMore = async (page) => {
    setPage(page);

    setIsLoading(true);
    const response = await CategoryService.getCategoriesPagination({
      page: page,
      per_page: 5,
    });

    setIsLoading(false);
    if (response.data.data.length !== 0) {
      setCategories(response.data.data);
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
      setCategories(res.data.data);
    }
  }, []);

  useEffect(() => {
    categoriesList(selectedCate);
  }, [selectedCate]);

  return (
    <>
      <form>
        {
          isLoading
            ? <div align="center"><i class="fa fa-spinner fa-spin icon-fz-16 icon-color-light"></i></div>
            : categories.length !== 0
              ? categories.map(cate => {
                  return (
                    <label key={ cate.id } className="checkbox-label">
                        { cate.name }
                        <input 
                          type="checkbox" 
                          className="checkbox-input" 
                          value={ cate.id } 
                          onChange={ handleSelectedCategories } 
                        />
                        <span className="mark" />
                    </label>
                )
              })
              : null
        }
    </form>
    <div align="center">
      <div className="pagination">
        <ul className="paginations">
          <li 
            className={ page === 1 ? `page-item inactive` : `page-item` } 
            onClick={ () => { if (page - 1 > 0) { handleLoadMore(page - 1 ) } } }
          >
            <i class="fal fa-chevron-left"></i>
          </li>
          {
            renderPagination(totalPage, 3)
          }
          <li 
            className={ page === totalPage ? `page-item inactive` : `page-item` } 
            onClick={ () => { if (page < totalPage) { handleLoadMore(page + 1 ) } } }
          >
            <i class="fal fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}
