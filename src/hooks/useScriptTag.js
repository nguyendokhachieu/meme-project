import { useEffect } from 'react';

export const useScriptTag = (url) => {
    useEffect(() => {
        const scriptTag = document.createElement("script");
        scriptTag.src = url;
        scriptTag.async = true;
    
        document.body.append(scriptTag);
    
        return () => {
          document.body.removeChild(scriptTag);
        }
      }, [url]);
}