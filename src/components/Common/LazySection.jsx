import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import useInView from '../../hooks/useInView';

const LazySection = ({ 
  children, 
  minHeight = '400px', 
  loadingComponent = null,
  className = '',
  animationDelay = 100,
  ...props 
}) => {
  const { ref, hasBeenInView } = useInView({
    threshold: 0.1,
    rootMargin: '100px'
  });
  
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (hasBeenInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, animationDelay);
      
      return () => clearTimeout(timer);
    }
  }, [hasBeenInView, animationDelay]);

  const LoadingComponent = loadingComponent || (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ minHeight }}
    >
      <Spin size="large" />
    </div>
  );

  return (
    <div ref={ref} className={className} {...props}>
      {hasBeenInView ? (
        <div 
          className={`transition-all duration-700 ease-out ${
            shouldAnimate 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {children}
        </div>
      ) : (
        LoadingComponent
      )}
    </div>
  );
};

export default LazySection;
