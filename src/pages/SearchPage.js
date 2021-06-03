import { useHistory } from "react-router";
import Search from "../components/Search";

export default function SearchPage() {
    const history = useHistory();
    let query = window.location.search;
    
    if (!query.startsWith('?q=')) {
        history.push('/404-not-found');
    }
    
    query = query.substr(3, query.length);

    query = decodeURIComponent(query);
    
    if (query.trim() === '') {
        history.push('/404-not-found');
    }

    return <Search q={ query } />;
}