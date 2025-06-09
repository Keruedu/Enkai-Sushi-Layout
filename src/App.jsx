import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import MenuSection from './components/Sections/MenuSection';
import ContactSection from './components/Sections/ContactSection';

function App() {
  const [language, setLanguage] = useState('vi');
  const [isScrolled, setIsScrolled] = useState(false);

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
      colorText: '#2C2F5C', // Enkai dark blue
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
          <HeroSection 
            language={language} 
            onMenuClick={() => scrollToSection('menu')}
          />
          
          <AboutSection 
            language={language} 
          />
          
          <MenuSection 
            language={language} 
          />
          
          <ContactSection 
            language={language} 
          />
        </main>
        
        <Footer 
          language={language} 
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
