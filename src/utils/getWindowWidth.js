import { useEffect, useState } from 'react';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    let timeoutId = null;
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowWidth(getWindowWidth()), 150);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth.width;
}
