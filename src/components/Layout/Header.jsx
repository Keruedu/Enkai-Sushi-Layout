import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import { MenuOutlined, GlobalOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = ({ language, onLanguageChange, isScrolled, onMenuClick }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const navigationItems = [
    {
      key: 'home',
      label: language === 'vi' ? 'Trang chủ' : 'Home',
      onClick: () => onMenuClick('hero')
    },
    {
      key: 'about',
      label: language === 'vi' ? 'Về chúng tôi' : 'About',
      onClick: () => onMenuClick('about')
    },
    {
      key: 'menu',
      label: language === 'vi' ? 'Thực đơn' : 'Menu',
      onClick: () => onMenuClick('menu')
    },
    {
      key: 'contact',
      label: language === 'vi' ? 'Liên hệ' : 'Contact',
      onClick: () => onMenuClick('contact')
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

  return (
    <AntHeader className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm' 
        : 'bg-white bg-opacity-95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={() => onMenuClick('hero')}
        >
          <div className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">🍣</div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
            Enkai Sushi
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <Menu
            mode="horizontal"
            items={navigationItems}
            className="border-0 bg-transparent"
            selectedKeys={[]}
          />
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
      </div>

      {/* Mobile Navigation */}
      {mobileMenuVisible && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <Menu
            mode="vertical"
            items={navigationItems}
            className="border-0"
            onClick={() => setMobileMenuVisible(false)}
          />
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
