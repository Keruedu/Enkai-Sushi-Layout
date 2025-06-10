import { useState, useEffect, useRef } from 'react';

// Performance tracking for image loading
const trackImageLoad = (src, loadTime) => {
  console.log(`[Lazy Loading] Image ${src} loaded in ${loadTime.toFixed(2)}ms`);
};

const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  const loadStartTime = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isInView && src) {
      loadStartTime.current = performance.now();
      const img = new Image();
      img.onload = () => {
        const loadTime = performance.now() - loadStartTime.current;
        trackImageLoad(src, loadTime);
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src]);

  return { imageSrc, isLoaded, imgRef };
};

export default useLazyImage;
