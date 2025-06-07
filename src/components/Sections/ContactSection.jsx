import React from 'react';
import { Row, Col, Typography, Card, Button, Space, Form, Input } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/mockData';
import './ContactSection.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactSection = ({ language }) => {
  const content = contactInfo[language];
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // Here you would typically send the data to your backend
    form.resetFields();
  };

  const contactCards = [
    {
      icon: <EnvironmentOutlined />,
      title: language === 'vi' ? 'Địa chỉ' : 'Address',
      content: content.address,
      action: language === 'vi' ? 'Xem bản đồ' : 'View Map'
    },
    {
      icon: <PhoneOutlined />,
      title: language === 'vi' ? 'Điện thoại' : 'Phone',
      content: content.phone,
      action: language === 'vi' ? 'Gọi ngay' : 'Call Now'
    },
    {
      icon: <ClockCircleOutlined />,
      title: language === 'vi' ? 'Giờ mở cửa' : 'Opening Hours',
      content: (
        <div>
          <div>{content.hours.weekdays}</div>
          <div>{content.hours.weekend}</div>
        </div>
      ),
      action: language === 'vi' ? 'Chi tiết' : 'Details'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="section-header">
          <Text className="section-subtitle">
            {language === 'vi' ? 'Liên hệ' : 'Contact Us'}
          </Text>
          <Title level={2} className="section-title">
            {language === 'vi' ? 'Đặt bàn hoặc liên hệ' : 'Make a Reservation or Get in Touch'}
          </Title>
          <Text className="section-description">
            {language === 'vi' 
              ? 'Chúng tôi luôn sẵn sàng phục vụ bạn với những trải nghiệm ẩm thực tuyệt vời nhất'
              : 'We are always ready to serve you with the most wonderful culinary experiences'
            }
          </Text>
        </div>

        <Row gutter={[32, 32]} className="contact-main">
          <Col xs={24} lg={8}>
            <div className="contact-info">
              <Title level={3} className="contact-info-title">
                {language === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
              </Title>
              
              <Space direction="vertical" size="large" className="contact-cards">
                {contactCards.map((card, index) => (
                  <Card key={index} className="contact-card" hoverable>
                    <div className="contact-card-content">
                      <div className="contact-card-icon">
                        {card.icon}
                      </div>
                      <div className="contact-card-text">
                        <Title level={5} className="contact-card-title">
                          {card.title}
                        </Title>
                        <div className="contact-card-content-text">
                          {card.content}
                        </div>
                        <Button 
                          type="link" 
                          className="contact-card-action"
                          size="small"
                        >
                          {card.action} →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </Space>

              <div className="contact-social">
                <Title level={4} className="social-title">
                  {language === 'vi' ? 'Theo dõi chúng tôi' : 'Follow Us'}
                </Title>
                <div className="social-links">
                  <Button shape="circle" className="social-btn facebook">f</Button>
                  <Button shape="circle" className="social-btn instagram">📷</Button>
                  <Button shape="circle" className="social-btn zalo">Z</Button>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={16}>
            <div className="contact-form-container">
              <Card className="contact-form-card">
                <Title level={3} className="form-title">
                  {language === 'vi' ? 'Gửi tin nhắn cho chúng tôi' : 'Send us a Message'}
                </Title>
                
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="contact-form"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label={language === 'vi' ? 'Họ và tên' : 'Full Name'}
                        rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập họ tên' : 'Please enter your name' }]}
                      >
                        <Input 
                          size="large" 
                          placeholder={language === 'vi' ? 'Nhập họ và tên' : 'Enter your full name'}
                          className="form-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="phone"
                        label={language === 'vi' ? 'Số điện thoại' : 'Phone Number'}
                        rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập số điện thoại' : 'Please enter your phone' }]}
                      >
                        <Input 
                          size="large" 
                          placeholder={language === 'vi' ? 'Nhập số điện thoại' : 'Enter your phone number'}
                          className="form-input"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: language === 'vi' ? 'Vui lòng nhập email' : 'Please enter your email' },
                      { type: 'email', message: language === 'vi' ? 'Email không hợp lệ' : 'Invalid email format' }
                    ]}
                  >
                    <Input 
                      size="large" 
                      placeholder={language === 'vi' ? 'Nhập địa chỉ email' : 'Enter your email address'}
                      className="form-input"
                      prefix={<MailOutlined />}
                    />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    label={language === 'vi' ? 'Chủ đề' : 'Subject'}
                    rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập chủ đề' : 'Please enter subject' }]}
                  >
                    <Input 
                      size="large" 
                      placeholder={language === 'vi' ? 'Chủ đề tin nhắn' : 'Message subject'}
                      className="form-input"
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label={language === 'vi' ? 'Tin nhắn' : 'Message'}
                    rules={[{ required: true, message: language === 'vi' ? 'Vui lòng nhập tin nhắn' : 'Please enter your message' }]}
                  >
                    <TextArea 
                      rows={6}
                      placeholder={language === 'vi' ? 'Nhập tin nhắn của bạn...' : 'Enter your message...'}
                      className="form-textarea"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      size="large"
                      icon={<SendOutlined />}
                      className="submit-btn"
                      block
                    >
                      {language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>

        <div className="contact-map">
          <Title level={3} className="map-title">
            {language === 'vi' ? 'Vị trí nhà hàng' : 'Restaurant Location'}
          </Title>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <EnvironmentOutlined className="map-icon" />
                <Title level={4} className="map-text">
                  {language === 'vi' ? 'Bản đồ tương tác' : 'Interactive Map'}
                </Title>
                <Text className="map-description">
                  {language === 'vi' 
                    ? 'Nhấp để xem vị trí chính xác trên Google Maps'
                    : 'Click to view exact location on Google Maps'
                  }
                </Text>
                <Button type="primary" className="map-btn">
                  {language === 'vi' ? 'Mở bản đồ' : 'Open Map'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
