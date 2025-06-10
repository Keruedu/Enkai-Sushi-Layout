import React, { useState, useEffect } from 'react';
import useInView from '../../hooks/useInView';

const SlideUpAnimation = ({ 
  children, 
  delay = 0,
  duration = 700,
  distance = 30,
  triggerOnce = true,
  className = '',
  ...props 
}) => {
  const { ref, isInView, hasBeenInView } = useInView({
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const shouldTrigger = triggerOnce ? hasBeenInView : isInView;

  useEffect(() => {
    if (shouldTrigger) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (!triggerOnce) {
      setShouldAnimate(false);
    }
  }, [shouldTrigger, delay, triggerOnce]);

  return (
    <div 
      ref={ref} 
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate 
          ? 'translateY(0px) scale(1)' 
          : `translateY(${distance}px) scale(0.95)`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default SlideUpAnimation;
