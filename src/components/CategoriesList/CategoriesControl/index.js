import { useState } from "react";
import { useDispatch } from "react-redux";
import { actFetchAllCategoriesAsync } from "../../../store/categories/actions";
import "./style.css";

let isDispatched = false;

export default function CategoriesControl({
    typeOfShow = function(){},
    onSearchString = function(){},
}) {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const [selectShow, setSelectShow] = useState('page');

    const onInputChange = (e) => {
        setSearchString(e.target.value);
        onSearchString(e.target.value);
    }

    const onSelectChange = (e) => {
        setSelectShow(e.target.value);
        typeOfShow(e.target.value);

        if (e.target.value === 'all') {
            if (!isDispatched) {
                dispatch(actFetchAllCategoriesAsync());
                isDispatched = true;
            }
        }
    }

    return (
        <div className="categories-control">
                <form>
                    <input 
                        className="form-control categories-search-input" 
                        placeholder="Tìm kiếm danh mục ..." 
                        onChange={ onInputChange }
                    />
                    <i class="fal fa-info-circle tooltip-icon">
                        <div className="tooltip-content">
                            Chọn vào <i>Hiển thị tất cả</i> sẽ cho nhiều kết quả tìm kiếm hơn
                        </div>
                    </i>
                </form>
                <div className="tooltip-content-mobile">
                    <i class="fal fa-info-circle tooltip-icon-mobile"></i>
                    Chọn vào <i>Hiển thị tất cả</i> sẽ cho nhiều kết quả tìm kiếm hơn
                </div>
                <form>
                    <select className="select-show-option" onChange={ onSelectChange }>
                        <option value="page">Hiển thị ít hơn</option>
                        <option value="all">Hiển thị tất cả</option>
                    </select>
                </form>
            </div>
    );
}