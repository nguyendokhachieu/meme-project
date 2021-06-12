import "./list-categories.scss";

import { useEffect, useState } from "react";
import { CategoryService } from "../../../../services/categories";

export default function ListCategoriesUpload({
  categoriesList = function() {},
  query,
  reloadCategoriesList = false,
}) 
{
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleSelectCategory = e => {
    e.target.checked 
      ? setSelected(prev => [...prev, e.target.value])
      : setSelected(prev => {
        return prev.filter(id => {
          return id !== e.target.value;
        })
      })
  }

  useEffect(() => {
    categoriesList(selected);
  }, [selected]);

  useEffect(async () => {
    try {
      setIsLoading(true);
      
      const response = await CategoryService.getAllCategories({
        order_by: 'name',
        order_dir: 'ASC',
      });

      setIsLoading(false);
      response.data.data && setCategories(prev => [...response.data.data]);
    } catch (error) {
      
    }
  }, [reloadCategoriesList]);

  return (
    <div className="categories-list-section">
      <div className="inner-list">
      {
          isLoading
            ? <div align="center"><i class="fa fa-spinner fa-spin icon"></i></div>
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
