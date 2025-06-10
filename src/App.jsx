import React, { useState, useEffect, Suspense } from 'react';
import { ConfigProvider, Spin } from 'antd';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LazySection from './components/Common/LazySection';
import usePreloadCriticalImages from './hooks/usePreloadCriticalImages';

// Lazy load components
const HeroSection = React.lazy(() => import('./components/Sections/HeroSection'));
const AboutSection = React.lazy(() => import('./components/Sections/AboutSection'));
const MenuSection = React.lazy(() => import('./components/Sections/MenuSection'));
const ContactSection = React.lazy(() => import('./components/Sections/ContactSection'));

function App() {
  const [language, setLanguage] = useState('vi');
  const [isScrolled, setIsScrolled] = useState(false);

  // Preload critical images for better performance
  usePreloadCriticalImages();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Ant Design theme configuration that works with Tailwind
  const theme = {
    token: {
      colorPrimary: '#EF405B', // Enkai pink
      colorSuccess: '#10b981', 
      colorWarning: '#f59e0b', 
      colorError: '#EF405B',   
      colorInfo: '#3b82f6',    
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      borderRadius: 8,
      fontSize: 14,
      lineHeight: 1.5,
      colorBgContainer: '#ffffff',
      colorText: '#2A315D', // Updated to new color
      colorTextSecondary: '#6b7280',
    },
    components: {
      Button: {
        borderRadius: 8,
        fontWeight: 500,
        paddingContentHorizontal: 24,
        paddingContentVertical: 8,
      },
      Card: {
        borderRadius: 16,
        paddingLG: 24,
      },
      Input: {
        borderRadius: 8,
        paddingInline: 12,
        paddingBlock: 8,
      },
      Tabs: {
        titleFontSize: 16,
        titleFontSizeLG: 18,
        itemColor: '#6b7280',
        itemHoverColor: '#EF405B',
        itemSelectedColor: '#EF405B',
        inkBarColor: '#EF405B',
      },
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
      }
    }
  };

  // Loading component for Suspense fallback
  const LoadingFallback = () => (
    <div className="flex justify-center items-center h-64">
      <Spin size="large" />
    </div>
  );

  return (
    <ConfigProvider theme={theme}>
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          onLanguageChange={handleLanguageChange}
          isScrolled={isScrolled}
          onMenuClick={scrollToSection}
        />
        
        <main className="pt-16">
          <LazySection minHeight="600px" animationDelay={0}>
            <Suspense fallback={<LoadingFallback />}>
              <HeroSection 
                language={language} 
                onMenuClick={() => scrollToSection('menu')}
              />
            </Suspense>
          </LazySection>
          
          <LazySection minHeight="500px" animationDelay={200}>
            <Suspense fallback={<LoadingFallback />}>
              <AboutSection 
                language={language} 
              />
            </Suspense>
          </LazySection>
          
          <LazySection minHeight="600px" animationDelay={300}>
            <Suspense fallback={<LoadingFallback />}>
              <MenuSection 
                language={language} 
              />
            </Suspense>
          </LazySection>
          
          <LazySection minHeight="400px" animationDelay={400}>
            <Suspense fallback={<LoadingFallback />}>
              <ContactSection 
                language={language} 
              />
            </Suspense>
          </LazySection>
        </main>
        
        <Footer 
          language={language} 
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
