import "./search.scss";

import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { actHideSearch } from "../../../store/header/actions";

export default function HeaderSearch() {
  const inputRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { showSearch } = useSelector(state => state.header);

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

  useEffect(() => {
    showSearch && inputRef.current && inputRef.current.focus();
  }, [showSearch]);

  return (
    <div className={ showSearch ? "header-search-form" : "header-search-form hidden" }>
      <form onSubmit={handleSearch} className="form-search">
        <input
            type="search"
            name="q"
            className="form-control"
            placeholder="Tìm kiếm ..."
            value={ query }
            ref={ inputRef }
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
      </form>
      <div className="close-form" onClick={ e => { dispatch(actHideSearch()) } }>
        <i className="fal fa-times icon"></i>
      </div>
    </div>
  );
}
