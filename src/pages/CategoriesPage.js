import { useEffect, useState } from "react";
import { actFetchAllCategories } from "../store/categories/actions";
import { CategoryService } from "../services/categories";
import Categories from "../components/Categories";
import { useDispatch } from "react-redux";

let isDispatched = false;

export default function CategoriesPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        if (!isDispatched) {
            setLoading(true);

            const response = await CategoryService.getAllCategories({
                order_by: 'name',
                order_dir: 'ASC',
            });

            dispatch(actFetchAllCategories(response.data.data));

            setLoading(false);
            isDispatched = true;
        }
    }, []);

    return <Categories loading={ loading } />;
}