import "./search.scss";

import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Results from "./Results";

import { useWindowSize } from "../../hooks/useWindowSize";
import { SearchService } from "../../services/search";

export default function Search({ 
    q = null 
}) 
{
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [orderBy, setOrderBy] = useState('created_at');
    const [orderDir, setOrderDir] = useState('DESC');
    const [hasMore, setHasMore] = useState(true);
    const [results, setResults] = useState([]);
    const { width } = useWindowSize();

    const handleLoadMore = async () => {
        setButtonLoading(true);
        
        const response = await SearchService.get({
            q,
            page: page + 1,
            per_page: 8,
            order_by: orderBy,
            order_dir: orderDir,
        });

        setButtonLoading(false);
        setPage(prev => prev + 1);

        response.data.data.length === 0 && setHasMore(false);
        setResults(prev => {
            return [...prev, ...response.data.data];
        });
    }

    useEffect(async () => {
        setPage(prev => 1);
        setResults([]);
        setLoading(true);
        
        const response = await SearchService.get({
            q,
            page: 1,
            per_page: 8,
            order_by: orderBy,
            order_dir: orderDir,
        });

        response.data.data && response.data.data.length === 0 && setHasMore(false);
        setLoading(false);
        setResults(response.data.data || []);
    }, [q, orderBy, orderDir]);

    return (
        <div className="main-content">
            <div className="container">
                <section className="search-section">
                    <div className="search-top">
                        {
                            width <= 992
                                ? (
                                    <Sidebar 
                                        onOrderByChange={ value => { setOrderBy(value) } }
                                        onOrderDirChange={ value => { setOrderDir(value) } }
                                    />
                                )
                                : null
                        }
                    </div>
                    <div className="search-inner-wrap">
                        <div className="search-sidebar-wrap">
                            <Sidebar 
                                onOrderByChange={ value => { setOrderBy(value) } }
                                onOrderDirChange={ value => { setOrderDir(value) } }
                            />
                        </div>
                        <div className="search-results-wrap">
                            <Results 
                                q={ q }
                                results={ results }
                                loading={ loading } 
                                buttonLoading={ buttonLoading }
                                loadMore={ val => { handleLoadMore() } }
                                hasMore={ hasMore }
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}