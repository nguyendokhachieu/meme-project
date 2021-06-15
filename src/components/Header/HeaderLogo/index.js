import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchPostsPaginationAsync } from "../../../store/posts/actions";
import { actHideLoading, actShowLoading } from "../../../store/loading/actions";

export default function HeaderLogo() {
  const dispatch = useDispatch();

  const scrollToTopAndReFetch = () => {
    
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTopAndReFetch);
      window.scrollTo(0, c - c / 16);
    }
    
    dispatch(actFetchPostsPaginationAsync({
      page: 1,
      per_page: 3,
    })).finally(() => {
      dispatch(actHideLoading());
    })
  }

    return (
        <div className="header-logo" onClick={ e => { dispatch(actShowLoading()); scrollToTopAndReFetch(); } }>
          <Link to="/" className="header-logo-link">
            Meme
          </Link>
        </div>
    );
}