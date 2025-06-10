# Lazy Loading Implementation

## Tổng quan
Dự án này sử dụng lazy loading để tối ưu hóa hiệu suất bằng cách chỉ tải các component và hình ảnh khi chúng thực sự cần thiết.

## Các component lazy loading

### 1. LazySection
- **Vị trí**: `src/components/Common/LazySection.jsx`
- **Chức năng**: Lazy load các section khi chúng xuất hiện trong viewport
- **Hiệu ứng**: Trượt từ dưới lên với animation smooth
- **Cách sử dụng**:
```jsx
<LazySection minHeight="600px" animationDelay={200}>
  <YourComponent />
</LazySection>
```

### 2. LazyImage
- **Vị trí**: `src/components/Common/LazyImage.jsx`
- **Chức năng**: Lazy load hình ảnh với placeholder và loading spinner
- **Hiệu ứng**: Fade in với scale effect
- **Cách sử dụng**:
```jsx
<LazyImage 
  src={imageSrc}
  alt="Description"
  className="w-full h-auto"
  animationDelay={150}
/>
```

### 3. SlideUpAnimation
- **Vị trí**: `src/components/Common/SlideUpAnimation.jsx`
- **Chức năng**: Wrapper component cho hiệu ứng trượt từ dưới lên
- **Tính năng**: Configurable delay, duration, và distance
- **Cách sử dụng**:
```jsx
<SlideUpAnimation delay={100} duration={700} distance={30}>
  <YourElement />
</SlideUpAnimation>
```

## Custom Hooks

### 1. useLazyImage
- **Vị trí**: `src/hooks/useLazyImage.js`
- **Chức năng**: Hook để lazy load hình ảnh với Intersection Observer
- **Tính năng**: Performance tracking và error handling

### 2. useInView
- **Vị trí**: `src/hooks/useInView.js`
- **Chức năng**: Hook để detect khi element vào viewport
- **Tính năng**: Configurable threshold và root margin

### 3. usePreloadCriticalImages
- **Vị trí**: `src/hooks/usePreloadCriticalImages.js`
- **Chức năng**: Preload những hình ảnh quan trọng để cải thiện UX
- **Tính năng**: Preload logo, banner images để hiển thị ngay lập tức

## Component Lazy Loading

Các section chính được lazy load bằng React.lazy():
- `HeroSection`
- `AboutSection`
- `MenuSection`
- `ContactSection`

## Performance Monitoring

### PerformanceMonitor
- **Vị trí**: `src/utils/performanceMonitor.js`
- **Chức năng**: Theo dõi hiệu suất loading
- **Metrics**: Image load time, component load time, FCP, LCP

## Hiệu ứng Animation

### Slide Up Effect
- **Duration**: 700ms
- **Easing**: ease-out
- **Transform**: translateY + scale
- **Stagger**: Delay khác nhau cho từng item

### Image Loading Effect
- **Opacity**: 0 → 1
- **Scale**: 0.95 → 1
- **Transform**: translateY(4px) → translateY(0)

## Cấu hình

### Intersection Observer Options
```javascript
{
  threshold: 0.1,        // Trigger khi 10% element visible
  rootMargin: '50px'     // Trigger trước 50px
}
```

### Animation Timing
- Section delays: 0ms, 200ms, 300ms, 400ms
- Menu items: staggered 100ms per item
- Features: staggered 150ms per item

## Browser Support
- Modern browsers with Intersection Observer support
- Fallback graceful degradation cho browsers cũ
- Service Worker cho caching (nếu supported)

## Performance Benefits
1. **Faster initial load**: Chỉ load critical content trước
2. **Reduced bandwidth**: Chỉ tải hình ảnh khi cần
3. **Better UX**: Smooth animations và loading states
4. **SEO friendly**: Content vẫn accessible

## Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

## Notes
- Service Worker được cấu hình để cache static assets
- Critical images được preload để cải thiện perceived performance
- All animations có thể disable qua CSS prefers-reduced-motion
