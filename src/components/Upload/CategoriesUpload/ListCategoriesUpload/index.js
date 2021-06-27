import "./list-categories.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  actFetchAllCategoriesAsync, 
          actSelectOneCategory, 
          actRemoveSelectOneCategory } from "../../../../store/categories/actions";

export default function ListCategoriesUpload({
  query
}) 
{
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { categories } = useSelector(state => state.categories);

  const handleSelectCategory = e => {
    e.target.checked 
      ? dispatch(actSelectOneCategory(Number(e.target.value)))
      : dispatch(actRemoveSelectOneCategory(Number(e.target.value)))
  }

  useEffect(() => {
    if (isLoading) return;

    setIsLoading(true);

    dispatch(actFetchAllCategoriesAsync({
      order_by: 'name',
      order_dir: 'ASC',
    })).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="categories-list-section">
      <div className="inner-list">
      {
          isLoading
            ? <div align="center"><i className="fa fa-spinner fa-spin icon"></i></div>
            : categories.length !== 0
              ? categories.filter(c => {
                  if (query === '') {
                    return c;
                  }
                  return c.name.toLowerCase().includes(query.toLowerCase());
                }).map(cate => {
                    return (
                      <label key={ cate.id } className="checkbox-label">
                          { cate.name }
                          <input 
                            type="checkbox" 
                            className="checkbox-input" 
                            value={ cate.id } 
                            onChange={ handleSelectCategory }
                          />
                          <span className="mark" />
                      </label>
                  )
                })
              : null
        }
      </div>
    </div>
  );
}
