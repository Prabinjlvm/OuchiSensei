import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // If using React Router

const TailwindLoader = () => {
  const location = useLocation(); // Get current route

  useEffect(() => {
    // Only load Tailwind if not on the initial page (e.g., '/')
    if (location.pathname !== '/') {
      const script = document.createElement('script');
      script.src = 'https://cdn.tailwindcss.com';
      script.async = true;
      document.head.appendChild(script);

      // Cleanup: Remove the script when the component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default TailwindLoader;