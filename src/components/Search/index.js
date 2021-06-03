import "./search.scss";
import Sidebar from "./Sidebar";
import Results from "./Results";
import { SearchService } from "../../services/search";
import { useEffect, useState } from "react";

export default function Search({ q = null }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [orderBy, setOrderBy] = useState('created_at');
    const [orderDir, setOrderDir] = useState('DESC');
    const [results, setResults] = useState([]);

    useEffect(async () => {
        setResults([]);
        setLoading(true);
        
        const response = await SearchService.get({
            q,
            page: page,
            per_page: 8,
            order_by: orderBy,
            order_dir: orderDir,
        });

        setLoading(false);
        setResults(response.data.data || []);
    }, [q, page, orderBy, orderDir]);

    return (
        <div className="main-content">
            <div className="container">
                <section className="search-section">
                    <div className="search-inner-wrap">
                        <Sidebar 
                            onOrderByChange={ value => { setOrderBy(value) } }
                            onOrderDirChange={ value => { setOrderDir(value) } }
                        />
                        <Results 
                            q={ q }
                            results={ results }
                            loading={ loading } 
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}