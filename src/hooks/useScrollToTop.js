import { useCallback } from "react";

export function useScrollToTop() {
    
  const scrollToTop = useCallback(() => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 12);
    }
  }, []);
  
  return {
    scrollToTop,
  }
}