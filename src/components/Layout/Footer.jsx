import React from 'react';
import { Row, Col, Typography, Space, Button } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/mockData';
import logoImg from '../../assets/images/footer-logo.png';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import zaloIcon from '../../assets/icons/zalo.svg';
import LazyImage from '../Common/LazyImage';

const { Title, Text } = Typography;

const Footer = ({ language }) => {
  const content = contactInfo[language];  return (
    <footer 
      className="text-white relative bg-[#2A315D]"

    >        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <LazyImage 
                  src={logoImg} 
                  alt="Enkai Sushi Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <Text className="text-gray-300 text-base leading-relaxed block">
                {language === 'vi' 
                  ? 'Hương vị Nhật Bản chính thống tại trung tâm Sài Gòn'
                  : 'Authentic Japanese flavors in the heart of Saigon'
                }
              </Text>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div className="space-y-4">
              <Title level={5} className="!text-white text-lg font-semibold mb-4">
                {language === 'vi' ? 'Liên hệ' : 'Contact'}
              </Title>
              <Space direction="vertical" size="medium" className="w-full">
                <div className="flex items-center space-x-3">
                  <EnvironmentOutlined className="text-primary-500 text-lg" />
                  <Text className="text-gray-300">{content.address}</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneOutlined className="text-primary-500 text-lg" />
                  <Text className="text-gray-300">{content.phone}</Text>
                </div>
              </Space>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div className="space-y-4">
              <Title level={5} className="!text-white text-lg font-semibold mb-4">
                {language === 'vi' ? 'Giờ mở cửa' : 'Opening Hours'}
              </Title>
              <Space direction="vertical" size="medium" className="w-full">
                <div className="flex items-center space-x-3">
                  <ClockCircleOutlined className="text-primary-500 text-lg" />
                  <Text className="text-gray-300">{content.hours.weekdays}</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockCircleOutlined className="text-primary-500 text-lg" />
                  <Text className="text-gray-300">{content.hours.weekend}</Text>
                </div>
              </Space>
            </div>
          </Col>

          <Col xs={24} md={6}>
            <div className="space-y-4">
              <Title level={5} className="!text-white text-lg font-semibold mb-4">
                {language === 'vi' ? 'Theo dõi chúng tôi' : 'Follow Us'}
              </Title>              <Space direction="horizontal" size="large" className="w-full">
                <Button 
                  type="text" 
                  className="backdrop-blur-sm rounded-lg p-0 h-auto hover:scale-110 transition-all duration-200"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <LazyImage 
                    src={facebookIcon} 
                    alt="Facebook" 
                    className="w-8 h-8"
                  />
                </Button>
                <Button 
                  type="text" 
                  className="backdrop-blur-sm rounded-lg p-0 h-auto hover:scale-110 transition-all duration-200"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <LazyImage 
                    src={instagramIcon} 
                    alt="Instagram" 
                    className="w-8 h-8"
                  />
                </Button>
                <Button 
                  type="text" 
                  className="bg-white rounded-xl p-0 h-auto hover:scale-110 transition-all duration-200"
                  onClick={() => window.open('https://zalo.me', '_blank')}
                >
                  <LazyImage 
                    src={zaloIcon} 
                    alt="Zalo" 
                    className="w-8 h-8"
                  />
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <Text className="text-gray-400">
            © 2025 Enkai Sushi. {language === 'vi' ? 'Bảo lưu mọi quyền.' : 'All rights reserved.'}
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
