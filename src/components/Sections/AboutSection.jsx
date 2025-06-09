import React from 'react';
import { Row, Col, Typography, Card, Space, Statistic } from 'antd';
import { CheckCircleOutlined, TeamOutlined, TrophyOutlined, HeartOutlined } from '@ant-design/icons';
import { aboutContent } from '../../data/mockData';

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
    <section className="py-16 lg:py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Row gutter={[32, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sushi Chef"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-48 h-32 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Sushi Restaurant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className="space-y-6">
              <div>
                <p className="text-primary-500 font-semibold text-lg mb-2">
                  {language === 'vi' ? 'Về chúng tôi' : 'About Us'}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                  {content.title}
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 py-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="!border-0 !shadow-lg hover:!shadow-xl transition-shadow duration-300 !rounded-xl"
              hoverable
            >
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary-500 to-secondary-900 rounded-2xl p-8 lg:p-12 mt-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            "{content.quote}"
          </h3>
          <div className="space-y-2">
            <p className="text-white font-semibold text-lg">Takeshi Yamamoto</p>
            <p className="text-white/80">
              {language === 'vi' ? 'Đầu bếp trưởng' : 'Head Chef'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
