import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchPostsPaginationAsync } from "../../../store/posts/actions";
import { actHideLoading, actShowLoading } from "../../../store/loading/actions";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

export default function HeaderLogo() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { scrollToTop } = useScrollToTop();

  const fetchNew = () => {
    if (loading) {
      return;
    }

    setLoading(true);

    dispatch(actFetchPostsPaginationAsync({
      page: 1,
      per_page: 8,
    })).finally(() => {
      setLoading(false);
      dispatch(actHideLoading());
    })
  }

    return (
        <div className="header-logo" onClick={ e => { dispatch(actShowLoading()); scrollToTop(); setTimeout(fetchNew, 1000) } }>
          <Link to="/" className="header-logo-link">
            Meme
          </Link>
        </div>
    );
}