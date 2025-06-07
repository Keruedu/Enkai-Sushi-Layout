import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { PlayCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { heroContent } from '../../data/mockData';
import './HeroSection.css';

const { Title, Text } = Typography;

const HeroSection = ({ language, onMenuClick }) => {
  const content = heroContent[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        <div className="wave-background"></div>
        <div className="floating-elements">
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          <div className="floating-element floating-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <div className="hero-text">
              <div className="hero-badge">
                <Text className="badge-text">
                  {language === 'vi' ? '🍣 Nhà hàng Nhật Bản' : '🍣 Japanese Restaurant'}
                </Text>
              </div>
              
              <Title level={1} className="hero-title">
                {content.title}
              </Title>
              
              <Text className="hero-description">
                {content.subtitle}
              </Text>
              
              <div className="hero-actions">
                <Space size="large" wrap>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<ShoppingCartOutlined />}
                    className="hero-btn hero-btn-primary"
                    onClick={() => scrollToSection('menu')}
                  >
                    {content.primaryButton}
                  </Button>
                  
                  <Button 
                    size="large" 
                    icon={<PlayCircleOutlined />}
                    className="hero-btn hero-btn-secondary"
                    onClick={() => scrollToSection('about')}
                  >
                    {content.secondaryButton}
                  </Button>
                </Space>
              </div>
              
              <div className="hero-stats">
                <Row gutter={24}>
                  <Col span={8}>
                    <div className="stat-item">
                      <Title level={3} className="stat-number">10+</Title>
                      <Text className="stat-label">
                        {language === 'vi' ? 'Năm kinh nghiệm' : 'Years Experience'}
                      </Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="stat-item">
                      <Title level={3} className="stat-number">50+</Title>
                      <Text className="stat-label">
                        {language === 'vi' ? 'Món ăn' : 'Menu Items'}
                      </Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="stat-item">
                      <Title level={3} className="stat-number">1000+</Title>
                      <Text className="stat-label">
                        {language === 'vi' ? 'Khách hàng' : 'Happy Customers'}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Enkai Sushi"
                  className="hero-main-image"
                />
                <div className="image-decoration"></div>
              </div>
              
              <div className="floating-card">
                <div className="card-content">
                  <div className="card-icon">⭐</div>
                  <div className="card-text">
                    <Title level={5} className="card-title">4.8/5</Title>
                    <Text className="card-subtitle">
                      {language === 'vi' ? 'Đánh giá khách hàng' : 'Customer Rating'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroSection;
