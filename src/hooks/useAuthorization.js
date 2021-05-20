import { useState, useEffect } from "react";
import { UserService } from "../services/user";

export const useAuthorization = () => {
    const [auth, setAuth] = useState(false);
    
    useEffect(async () => {
        if (localStorage.getItem('tstring')) {
          try {
            const response = await UserService.auth(localStorage.getItem('tstring'));
    
            if (response.data.status === 200) {
              setAuth(true);
            }
          } catch (error) {
            
          }
        }
      }, []);

      return {
          auth,
      }
}