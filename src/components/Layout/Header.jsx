import React, { useState } from 'react';
import { Layout, Button, Dropdown, Space } from 'antd';
import { MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import logoImg from '../../assets/images/logo.png';

const { Header: AntHeader } = Layout;

const Header = ({ language, onLanguageChange, isScrolled, onMenuClick }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigationItems = [
    {
      key: 'home',
      label: (
        <span 
          className="cursor-pointer hover:text-primary-500 transition-colors duration-200 px-4 py-2"
          onClick={() => onMenuClick('hero')}
        >
          {language === 'vi' ? 'Trang chủ' : 'Home'}
        </span>
      )
    },
    {
      key: 'about',
      label: (
        <span 
          className="cursor-pointer hover:text-primary-500 transition-colors duration-200 px-4 py-2"
          onClick={() => onMenuClick('about')}
        >
          {language === 'vi' ? 'Về chúng tôi' : 'About'}
        </span>
      )
    },
    {
      key: 'menu',
      label: (
        <span 
          className="cursor-pointer hover:text-primary-500 transition-colors duration-200 px-4 py-2"
          onClick={() => onMenuClick('menu')}
        >
          {language === 'vi' ? 'Thực đơn' : 'Menu'}
        </span>
      )
    },
    {
      key: 'contact',
      label: (
        <span 
          className="cursor-pointer hover:text-primary-500 transition-colors duration-200 px-4 py-2"
          onClick={() => onMenuClick('contact')}
        >
          {language === 'vi' ? 'Liên hệ' : 'Contact'}
        </span>
      )
    }
  ];
  const languageMenu = {
    items: [
      {
        key: 'vi',
        label: (
          <span onClick={() => onLanguageChange('vi')}>
            🇻🇳 Tiếng Việt
          </span>
        )
      },
      {
        key: 'en',
        label: (
          <span onClick={() => onLanguageChange('en')}>
            🇺🇸 English
          </span>
        )
      }
    ]
  };

  return (    <AntHeader className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm' 
        : 'bg-white bg-opacity-95 backdrop-blur-sm'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => onMenuClick('hero')}
        >
          <img 
            src={logoImg} 
            alt="Enkai Sushi Logo" 
            className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navigationItems.map((item) => (
            <div
              key={item.key}
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={item.label.props.onClick}
            >
              <span className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200">
                {item.label.props.children}
              </span>
            </div>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Dropdown menu={languageMenu} trigger={['click']}>
            <Button 
              type="text" 
              icon={<GlobalOutlined />}
              className="hover:bg-gray-100 hover:text-primary-500 transition-colors duration-200"
            >
              {language === 'vi' ? '🇻🇳' : '🇺🇸'}
            </Button>
          </Dropdown>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="md:hidden hover:bg-gray-100 hover:text-primary-500 transition-colors duration-200"
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          />
        </div>
      </div>      {/* Mobile Navigation */}
      {mobileMenuVisible && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="py-2">
            {navigationItems.map((item) => (
              <div
                key={item.key}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => {
                  // Extract onClick from the span element
                  const onClick = item.label.props.onClick;
                  if (onClick) onClick();
                  setMobileMenuVisible(false);
                }}
              >
                <span className="text-gray-700 hover:text-primary-500 transition-colors duration-200">
                  {item.label.props.children}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
