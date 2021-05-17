import Header from "./../components/Header";
import DetailPost from "./../components/DetailPost";
import { useParams } from "react-router";

export default function DetailPostPage() {
    const { postID } = useParams();

    return (
        <>
            <Header />
            <DetailPost postID={ postID } />
        </>
    );
}