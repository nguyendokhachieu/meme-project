import "./search.scss";

import { useDispatch } from "react-redux";

import { actShowSearch } from "../../../../store/header/actions";

export default function Search() {
  const dispatch = useDispatch();



  return (
    <span 
      className="header-search-btn"
      onClick={ e => { dispatch(actShowSearch()) } }
    >
      <i className="fad fa-search icon"></i>
    </span>
  );
}
