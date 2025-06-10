import React from 'react';
import { Row, Col, Typography, Card, Button, Space, Form, Input } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';
import { contactInfo } from '../../data/mockData';
import footerPattern from '../../assets/images/footer-pattern.png';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import zaloIcon from '../../assets/icons/zalo.svg';

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
  ];  return (
    <section 
      className="py-16 lg:py-24 bg-white relative" 
      id="contact"
      style={{
        backgroundImage: `url(${footerPattern})`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom',
        backgroundSize: 'auto 60px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-500 font-semibold text-lg mb-2">
            {language === 'vi' ? 'Liên hệ' : 'Contact Us'}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            {language === 'vi' ? 'Đặt bàn hoặc liên hệ' : 'Make a Reservation or Get in Touch'}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {language === 'vi' 
              ? 'Chúng tôi luôn sẵn sàng phục vụ bạn với những trải nghiệm ẩm thực tuyệt vời nhất'
              : 'We are always ready to serve you with the most wonderful culinary experiences'
            }
          </p>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={8}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                {language === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
              </h3>
              
              <div className="space-y-4">
                {contactCards.map((card, index) => (
                  <Card 
                    key={index} 
                    className="!border-0 !shadow-lg hover:!shadow-xl transition-shadow duration-300 !rounded-xl"
                    hoverable
                  >
                    <div className="flex items-start space-x-4 p-2">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-secondary-900 mb-2">
                          {card.title}
                        </h5>
                        <div className="text-gray-600 mb-3">
                          {card.content}
                        </div>
                        <Button 
                          type="link" 
                          className="!p-0 !h-auto !text-primary-500 hover:!text-primary-600"
                          size="small"
                        >
                          {card.action} →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  {language === 'vi' ? 'Theo dõi chúng tôi' : 'Follow Us'}
                </h4>
                <div className="flex space-x-3">
                  <Button 
                    shape="circle" 
                    className="!p-0 !flex !items-center !justify-center"
                    size="large"
                    onClick={() => window.open('https://facebook.com/enkaisushi', '_blank')}
                  >
                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                  </Button>
                  <Button 
                    shape="circle" 
                    className="!p-0 !flex !items-center !justify-center"
                    size="large"
                    onClick={() => window.open('https://instagram.com/enkaisushi', '_blank')}
                  >
                    <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                  </Button>
                  <Button 
                    shape="circle" 
                    className="!p-0 !flex !items-center !justify-center"
                    size="large"
                    onClick={() => window.open('https://zalo.me/enkaisushi', '_blank')}
                  >
                    <img src={zaloIcon} alt="Zalo" className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={16}>
            <Card className="!border-0 !shadow-xl !rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                {language === 'vi' ? 'Gửi tin nhắn cho chúng tôi' : 'Send us a Message'}
              </h3>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
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
                        className="!rounded-lg"
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
                        className="!rounded-lg"
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
                    className="!rounded-lg"
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
                    className="!rounded-lg"
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
                    className="!rounded-lg"
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    icon={<SendOutlined />}
                    className="!bg-primary-500 hover:!bg-primary-600 !border-primary-500 hover:!border-primary-600 !rounded-lg w-full"
                    block
                  >
                    {language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            {language === 'vi' ? 'Vị trí nhà hàng' : 'Restaurant Location'}
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4947871251284!2d106.6918174743644!3d10.775374489373163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2sB%E1%BA%BFn%20Th%C3%A0nh%20Market!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'vi' ? 'Vị trí nhà hàng Enkai Sushi' : 'Enkai Sushi Restaurant Location'}
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <Button 
              type="primary" 
              size="large"
              icon={<EnvironmentOutlined />}
              className="!bg-primary-500 hover:!bg-primary-600 !border-primary-500 hover:!border-primary-600 !rounded-lg"
              onClick={() => window.open('https://maps.google.com/?q=Bến+Thành+Market,+Ho+Chi+Minh+City,+Vietnam', '_blank')}
            >
              {language === 'vi' ? 'Mở trên Google Maps' : 'Open in Google Maps'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
