import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserService } from "../services/user";
import { actAuthorization } from "../store/user/actions";

export const useAuthorization = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(false);
    
    useEffect(async () => {
        if (localStorage.getItem('tstring')) {
          try {
            const response = await UserService.auth(localStorage.getItem('tstring'));
            
            if (response.data.status === 200) {
              setAuth(true);
              dispatch(actAuthorization(response.data));
            }
          } catch (error) {
            
          }
        }
      }, []);

      return {
          auth,
      }
}