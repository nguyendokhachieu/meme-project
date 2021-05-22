import DetailPost from "./../components/DetailPost";
import { useParams } from "react-router";

export default function DetailPostPage() {
    const { postID } = useParams();

    return <DetailPost postID={ postID } />;
}