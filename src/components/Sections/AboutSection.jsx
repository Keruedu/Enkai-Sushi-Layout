import React from 'react';
import { Row, Col, Typography, Card, Space, Statistic } from 'antd';
import { CheckCircleOutlined, TeamOutlined, TrophyOutlined, HeartOutlined } from '@ant-design/icons';
import { aboutContent } from '../../data/mockData';
import './AboutSection.css';

const { Title, Text, Paragraph } = Typography;

const AboutSection = ({ language }) => {
  const content = aboutContent[language];

  const features = [
    {
      icon: <CheckCircleOutlined />,
      title: language === 'vi' ? 'Nguyên liệu tươi sống' : 'Fresh Ingredients',
      description: language === 'vi' 
        ? 'Cá tươi được nhập khẩu trực tiếp từ Nhật Bản mỗi ngày'
        : 'Fresh fish imported directly from Japan daily'
    },
    {
      icon: <TeamOutlined />,
      title: language === 'vi' ? 'Đầu bếp chuyên nghiệp' : 'Professional Chefs',
      description: language === 'vi'
        ? 'Đội ngũ đầu bếp được đào tạo tại Nhật Bản'
        : 'Chefs trained in Japan with authentic techniques'
    },
    {
      icon: <TrophyOutlined />,
      title: language === 'vi' ? 'Chất lượng hàng đầu' : 'Premium Quality',
      description: language === 'vi'
        ? 'Đạt tiêu chuẩn chất lượng quốc tế'
        : 'Meeting international quality standards'
    },
    {
      icon: <HeartOutlined />,
      title: language === 'vi' ? 'Phục vụ tận tâm' : 'Heartfelt Service',
      description: language === 'vi'
        ? 'Dịch vụ khách hàng tận tâm và chu đáo'
        : 'Dedicated and attentive customer service'
    }
  ];

  const stats = [
    {
      value: 10,
      suffix: '+',
      title: language === 'vi' ? 'Năm kinh nghiệm' : 'Years Experience'
    },
    {
      value: 50,
      suffix: '+',
      title: language === 'vi' ? 'Món ăn đặc biệt' : 'Signature Dishes'
    },
    {
      value: 1000,
      suffix: '+',
      title: language === 'vi' ? 'Khách hàng hài lòng' : 'Happy Customers'
    },
    {
      value: 5,
      title: language === 'vi' ? 'Sao đánh giá' : 'Star Rating'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <Row gutter={[32, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="about-images">
              <div className="main-image">
                <img 
                  src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sushi Chef"
                  className="about-image"
                />
                <div className="image-overlay">
                  <div className="play-button">
                    <div className="play-icon">▶</div>
                  </div>
                </div>
              </div>
              
              <div className="secondary-image">
                <img 
                  src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Sushi Restaurant"
                  className="about-image-small"
                />
              </div>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className="about-text">
              <div className="section-header">
                <Text className="section-subtitle">
                  {language === 'vi' ? 'Về chúng tôi' : 'About Us'}
                </Text>
                <Title level={2} className="section-title">
                  {content.title}
                </Title>
              </div>
              
              <Paragraph className="about-description">
                {content.description}
              </Paragraph>
              
              <div className="about-stats">
                <Row gutter={[16, 16]}>
                  {stats.map((stat, index) => (
                    <Col xs={12} sm={6} key={index}>
                      <div className="stat-card">
                        <Statistic
                          value={stat.value}
                          suffix={stat.suffix}
                          valueStyle={{
                            color: 'var(--color-primary)',
                            fontWeight: 'bold',
                            fontSize: '2rem'
                          }}
                        />
                        <Text className="stat-title">{stat.title}</Text>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row gutter={[24, 24]} className="about-features">
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className="feature-card" hoverable>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <Title level={4} className="feature-title">
                  {feature.title}
                </Title>
                <Text className="feature-description">
                  {feature.description}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="about-quote">
          <div className="quote-content">
            <Title level={3} className="quote-text">
              "{content.quote}"
            </Title>
            <div className="quote-author">
              <Text className="author-name">Takeshi Yamamoto</Text>
              <Text className="author-title">
                {language === 'vi' ? 'Đầu bếp trưởng' : 'Head Chef'}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
