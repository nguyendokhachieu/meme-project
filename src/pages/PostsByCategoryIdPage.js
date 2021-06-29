import { useHistory, useParams } from "react-router";
import PostsByCategoryId from "../components/PostsByCategoryId";

export default function PostsByCategoryIdPage() {
    const { id } = useParams();
    const history = useHistory();

    if (isNaN(id)) {
        history.push('/categories');
        return null;
    }

    return <PostsByCategoryId categoryId={ id } />;
}