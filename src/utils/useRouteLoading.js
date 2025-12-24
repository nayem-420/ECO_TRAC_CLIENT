import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router";

export const useRouteLoading = (duration = 1200) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), duration);

    return () => clearTimeout(timer);
  }, [location.key, duration]);

  return loading;
};
