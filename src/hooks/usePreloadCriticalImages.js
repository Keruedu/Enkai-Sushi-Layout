import { useEffect } from 'react';

// Critical images that should be preloaded
const CRITICAL_IMAGES = [
  '/src/assets/images/logo.png',
  '/src/assets/images/footer-logo.png',
  '/src/assets/images/group.png',
  '/src/assets/images/banner1.png'
];

const usePreloadCriticalImages = () => {
  useEffect(() => {
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadCriticalImages = async () => {
      try {
        const promises = CRITICAL_IMAGES.map(src => preloadImage(src));
        await Promise.allSettled(promises);
        console.log('Critical images preloaded');
      } catch (error) {
        console.warn('Some critical images failed to preload:', error);
      }
    };

    // Preload after a short delay to not block initial render
    const timer = setTimeout(preloadCriticalImages, 100);
    
    return () => clearTimeout(timer);
  }, []);
};

export default usePreloadCriticalImages;
