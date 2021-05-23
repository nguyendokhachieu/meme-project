import { useHistory } from "react-router";
import Profile from "../components/Profile";

export default function ProfilePage() {
    const history = useHistory();
    let id = window.location.search;

    !id.startsWith('?id=') && history.push('/404-not-found');

    id = id.substr(4, id.length);
    
    isNaN(Number(id) * 0)  && history.push('/404-not-found'); 

    return <Profile 
                id={ id } 
                history={ history } 
            />;
}