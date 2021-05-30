import { useEffect, useState } from "react";

export function useScrolledPercentage() {
  const [scrolledPercentY, setScrolledPercentY] = useState(0);

  useEffect(() => {
    function calc() {
      const heightOfWindow = window.innerHeight;
      const contentScrolled = window.pageYOffset;
      const bodyHeight = window.document.getElementsByTagName("body")[0].offsetHeight;

      const total = bodyHeight - heightOfWindow;

      setScrolledPercentY(parseInt((contentScrolled / total) * 100));
    };

    document.addEventListener('scroll', calc);

    return () => {
        document.removeEventListener('scroll', calc);
    }
  });

  return {
      scrolledPercentY
  };
}
