import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function Search() {
  const history = useHistory();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    query.trim().length > 0 && history.push("/search?q=" + query);
  };

  useEffect(() => {
    let q = window.location.search;
    if (q.startsWith("?q=")) {
      q = q.substr(3, q.length);
      
      q = decodeURIComponent(q);
  
      if (q.trim() !== "") {
        setQuery(q);
      }
    }
  }, []);

  return (
    <div className="nav-search">
      <form onSubmit={ handleSearch }>
        <input
          type="search"
          name="search-text"
          className="form-control"
          placeholder="Tìm kiếm ..."
          value={ query }
          onChange={ e => { setQuery(e.target.value) } }
        />
      </form>
    </div>
  );
}
