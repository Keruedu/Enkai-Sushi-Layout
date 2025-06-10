import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { PlayCircleOutlined, ShoppingCartOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import gateImg from '../../assets/images/group.png';
import footerPattern from '../../assets/images/footer-pattern.png';
import LazyImage from '../Common/LazyImage';
import { PerformanceMonitor } from '../../utils/performanceMonitor';

const HeroSection = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  // Track component load time
  useEffect(() => {
    PerformanceMonitor.trackComponentLoad('HeroSection');
  }, []);

  const banners = [
    {
      image: banner1,
      title: "ENKAI DAY",
      subtitle: language === 'vi' ? "Đặc biệt cho ngày lễ" : "Special for holidays",
      date: "THU 7",
      month: "Nov",
      price: "2,000",
      currency: "Points"
    },
    {
      image: banner2,
      title: "PREMIUM SUSHI",
      subtitle: language === 'vi' ? "Sushi cao cấp" : "Premium quality sushi",
      date: "THU 8", 
      month: "Dec",
      price: "3,500",
      currency: "Points"
    },
    {
      image: banner1,
      title: "ENKAI SPECIAL",
      subtitle: language === 'vi' ? "Combo đặc biệt" : "Special combo deals",
      date: "SAT 10",
      month: "Dec",
      price: "4,000",
      currency: "Points"
    }
  ];

  // Create infinite loop array
  const infiniteBanners = [...banners, ...banners, ...banners];

  // Auto slide functionality - infinity loop từ phải sang trái
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => {
          const nextSlide = prev + 1;
          // Reset về đầu khi đến cuối để tạo infinity loop
          if (nextSlide >= banners.length * 2) {
            setTimeout(() => setCurrentSlide(banners.length), 0);
            return banners.length;
          }
          return nextSlide;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging, banners.length]);

  // Khởi tạo vị trí ban đầu ở giữa array
  useEffect(() => {
    setCurrentSlide(banners.length);
  }, [banners.length]);// Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    
    const slideWidth = sliderRef.current.offsetWidth;
    const dragDistance = Math.abs(walk);
    
    if (dragDistance > slideWidth / 6) {
      if (walk > 0) {
        // Dragging right - go to previous slide
        prevSlide();
      } else {
        // Dragging left - go to next slide
        nextSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling while swiping
    const x = e.touches[0].pageX;
    const walk = x - startX;
    
    const slideWidth = sliderRef.current?.offsetWidth || 300;
    const dragDistance = Math.abs(walk);
    
    // Reduce threshold for easier swiping on mobile
    if (dragDistance > slideWidth / 5) {
      if (walk > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };// Navigation handlers
  const goToSlide = (index) => {
    setCurrentSlide(index + banners.length); // Điều chỉnh cho infinity array
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= banners.length * 2) {
        setTimeout(() => setCurrentSlide(banners.length), 0);
        return banners.length;
      }
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      if (prevSlide < banners.length) {
        setTimeout(() => setCurrentSlide(banners.length * 2 - 1), 0);
        return banners.length * 2 - 1;
      }
      return prevSlide;
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };  return (
    <section 
      className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden" 
      id="hero"
      style={{
        position: 'relative'
      }}
    >      {/* Wave pattern overlay - behind header - only on tablet and up */}
      <div 
        className=""
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundImage: `url(${footerPattern})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 60px',
          zIndex: 40
          
        }}
      >
      </div>
      {/* Banner Slider Section */}
      <div className="relative pt-8 pb-8">
        <div className="relative w-full">        {/* Main Slider Container */}
          <div className="relative banner-slider mobile-banner-container">
            {/* Fade Overlay - Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 slider-fade-left z-10 pointer-events-none hidden md:block" />
            
            {/* Fade Overlay - Right */}
            <div className="absolute right-0 top-0 bottom-0 w-32 slider-fade-right z-10 pointer-events-none hidden md:block" />
              {/* Navigation Buttons */}            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 nav-button hidden md:flex"
            >
              <LeftOutlined className="text-primary-500 text-2xl" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 nav-button hidden md:flex"
            >
              <RightOutlined className="text-primary-500 text-2xl" />
            </button>{/* Slider Track */}            
            <div 
              ref={sliderRef}
              className={`slider-track cursor-grab active:cursor-grabbing ${isDragging ? 'dragging' : ''}`}
              style={{ 
                userSelect: 'none'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >              
              {infiniteBanners.map((banner, index) => {
                let slideClass = 'slider-item';
                
                // Xác định class dựa trên vị trí so với slide hiện tại
                if (index === currentSlide) {
                  slideClass += ' active';
                } else if (index === currentSlide - 1 || (currentSlide === 0 && index === infiniteBanners.length - 1)) {
                  slideClass += ' prev';
                } else if (index === currentSlide + 1 || (currentSlide === infiniteBanners.length - 1 && index === 0)) {
                  slideClass += ' next';
                }
                
                return (
                  <div key={`banner-${index}`} className={slideClass}>                    <div 
                      className="banner-content bg-gradient-to-r from-primary-500/90 to-secondary-900/90"
                      style={{
                        backgroundImage: `url(${banner.image})`,
                      }}
                    >
                      <div className="absolute top-6 right-6">
                        <div className="flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-4 h-4 bg-white/30 rounded-full animate-pulse" 
                                 style={{ animationDelay: `${i * 0.5}s` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}            </div>
          </div>          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6 mobile-dots-spacing">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dots-indicator mobile-dots-size ${
                  (currentSlide - banners.length) % banners.length === index ? 'active' : 'inactive'
                }`}
              />
            ))}
          </div>
        </div>
      </div>      {/* Main Hero Content with Gate Design */}
      <div className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            {/* Left Side - Gate Illustration */}
            <Col xs={24} lg={12} className="relative">
              <div 
                className="hidden max-md:block"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '80px',
                  backgroundImage: `url(${footerPattern})`,
                  backgroundRepeat: 'repeat-x',
                  backgroundPosition: 'bottom',
                  backgroundSize: 'auto 60px',
                  zIndex: 40
                  
                }}
              >
              </div>              <div className="relative"
                >
                <LazyImage
                  src={gateImg}
                  alt="Japanese Gate"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Col>            {/* Right Side - Content */}
            <Col xs={24} lg={12}>
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    {language === 'vi' ? 'Chào mừng đến với' : 'Welcome to'}
                    <span className="block text-primary-500">ENKAI SUSHI</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {language === 'vi' 
                      ? 'Trải nghiệm hương vị Nhật Bản đích thực với những món sushi tươi ngon được chế biến bởi đầu bếp chuyên nghiệp.'
                      : 'Experience authentic Japanese flavors with fresh sushi prepared by professional chefs.'
                    }
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    className="bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600"
                    onClick={() => scrollToSection('menu')}
                  >
                    {language === 'vi' ? 'Xem Thực Đơn' : 'View Menu'}
                  </Button>
                  
                  <Button
                    size="large"
                    icon={<PlayCircleOutlined />}
                    className="border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white"
                    onClick={() => scrollToSection('about')}
                  >
                    {language === 'vi' ? 'Tìm Hiểu Thêm' : 'Learn More'}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
