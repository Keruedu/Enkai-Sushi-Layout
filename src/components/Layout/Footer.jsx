import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/mockData';
import logoImg from '../../assets/images/footer-logo.png';

const { Title, Text } = Typography;

const Footer = ({ language }) => {
  const content = contactInfo[language];  return (
    <footer className="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <img 
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
          
          <Col xs={24} md={8}>
            <div className="space-y-4">
              <Title level={5} className="text-white text-lg font-semibold mb-4">
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
          
          <Col xs={24} md={8}>
            <div className="space-y-4">
              <Title level={5} className="text-white text-lg font-semibold mb-4">
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
