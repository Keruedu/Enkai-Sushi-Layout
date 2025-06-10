// Performance monitoring utility for lazy loading
export const PerformanceMonitor = {
  startTime: performance.now(),
  
  // Track component load times
  trackComponentLoad: (componentName) => {
    const loadTime = performance.now() - PerformanceMonitor.startTime;
    console.log(`[Lazy Loading] ${componentName} loaded in ${loadTime.toFixed(2)}ms`);
    
    // Track to performance API if available
    if (window.performance && window.performance.mark) {
      window.performance.mark(`${componentName}-loaded`);
    }
  },

  // Track image load times
  trackImageLoad: (imageSrc, loadTime) => {
    console.log(`[Lazy Loading] Image ${imageSrc} loaded in ${loadTime.toFixed(2)}ms`);
  },

  // Get performance metrics
  getMetrics: () => {
    if (!window.performance) return null;
    
    const navigation = performance.getEntriesByType('navigation')[0];
    const paintEntries = performance.getEntriesByType('paint');
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime
    };
  },

  // Log performance summary
  logSummary: () => {
    const metrics = PerformanceMonitor.getMetrics();
    if (metrics) {
      console.log('[Performance Summary]', metrics);
    }
  }
};

// Auto-log summary after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => PerformanceMonitor.logSummary(), 1000);
  });
}
