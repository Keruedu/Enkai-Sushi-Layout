import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import useLazyImage from '../../hooks/useLazyImage';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '', 
  loadingClassName = 'flex items-center justify-center bg-gray-200',
  showSpinner = true,
  animationDelay = 150,
  ...props 
}) => {
  const { imageSrc, isLoaded, imgRef } = useLazyImage(src, placeholder);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, animationDelay);
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded, animationDelay]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && showSpinner && (
        <div className={`absolute inset-0 ${loadingClassName}`}>
          <Spin size="small" />
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`transition-all duration-700 ease-out ${
          shouldAnimate 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95'
        } ${className}`}
        style={{ 
          width: '100%', 
          height: '100%',
          objectFit: 'cover'
        }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
