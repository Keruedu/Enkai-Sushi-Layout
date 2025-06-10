import React, { useState } from 'react';
import { Row, Col, Typography, Card, Button, Tag, Tabs, message } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, StarFilled } from '@ant-design/icons';
import { menuItems } from '../../data/mockData';
import LazyImage from '../Common/LazyImage';
import SlideUpAnimation from '../Common/SlideUpAnimation';

const { Title, Text } = Typography;

const MenuSection = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favoriteItems, setFavoriteItems] = useState(new Set());

  const categories = [
    { key: 'all', label: language === 'vi' ? 'Tất cả' : 'All' },
    { key: 'sushi', label: 'Sushi' },
    { key: 'sashimi', label: 'Sashimi' },
    { key: 'rolls', label: 'Rolls' }
  ];
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Debug log
  console.log('MenuSection - filteredItems:', filteredItems.length, 'activeCategory:', activeCategory);  const MenuCard = ({ item }) => {
    // Handle both new and old data structures gracefully
    const itemName = item[language]?.name || item.name || item.nameVi;
    const itemDescription = item[language]?.description || item.description || item.descriptionVi;
    const itemTags = item.tags || [];
    const itemPrice = typeof item.price === 'number' ? item.price : parseInt(item.price?.replace(/[,]/g, '') || '0');    const handleOrder = () => {
      message.success(language === 'vi' 
        ? `${itemName} đã được thêm vào giỏ hàng!` 
        : `${itemName} added to cart!`);
    };

    const handleFavorite = () => {
      const newFavorites = new Set(favoriteItems);
      if (newFavorites.has(item.id || item.name)) {
        newFavorites.delete(item.id || item.name);
        setFavoriteItems(newFavorites);
        message.info(language === 'vi' 
          ? `${itemName} đã được xóa khỏi danh sách yêu thích!` 
          : `${itemName} removed from favorites!`);
      } else {
        newFavorites.add(item.id || item.name);
        setFavoriteItems(newFavorites);
        message.info(language === 'vi' 
          ? `${itemName} đã được thêm vào danh sách yêu thích!` 
          : `${itemName} added to favorites!`);
      }
    };return (
      <Card 
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 h-full flex flex-col"
        hoverable        cover={
          <div className="relative overflow-hidden h-48 bg-gray-200">
            <LazyImage 
              src={item.image} 
              alt={itemName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loadingClassName="flex items-center justify-center bg-gray-200 h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex space-x-3">                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<ShoppingCartOutlined />}
                  size="large"
                  onClick={handleOrder}
                  className="bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600 shadow-lg transform hover:scale-110 transition-all duration-200"
                />                <Button 
                  shape="circle" 
                  icon={favoriteItems.has(item.id || item.name) ? <HeartFilled /> : <HeartOutlined />}
                  size="large"
                  onClick={handleFavorite}
                  className={`shadow-lg transform hover:scale-110 transition-all duration-200 ${
                    favoriteItems.has(item.id || item.name) 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                />
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <Tag 
                color="red" 
                className="bg-primary-500 text-white border-none px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg"
              >
                {item.category}
              </Tag>
            </div>
          </div>
        }
      >
        <div className="p-6 flex flex-col flex-1">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-3">
            <Title level={4} className="text-lg font-bold text-gray-900 mb-0 flex-1 pr-2 line-clamp-2">
              {itemName}
            </Title>
            <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg flex-shrink-0">
              <StarFilled className="text-yellow-400 text-sm" />
              <Text className="text-sm font-medium text-gray-700">4.8</Text>
            </div>
          </div>
          
          {/* Description */}
          <Text className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {itemDescription}
          </Text>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
            {itemTags.slice(0, 2).map((tag, index) => (
              <Tag 
                key={index} 
                className="bg-gray-100 text-gray-700 border-gray-200 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tag}
              </Tag>
            ))}
            {itemTags.length > 2 && (
              <Tag className="bg-gray-100 text-gray-700 border-gray-200 px-2 py-1 rounded-md text-xs font-medium">
                +{itemTags.length - 2}
              </Tag>
            )}
          </div>
          
          {/* Price and Order Button */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <Text className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {language === 'vi' ? 'Giá' : 'Price'}
              </Text>
              <Text className="text-xl font-bold text-primary-500">
                {itemPrice.toLocaleString('vi-VN')}
                <span className="text-sm ml-1">đ</span>
              </Text>
            </div>            <Button 
              type="primary" 
              icon={<ShoppingCartOutlined />}
              onClick={handleOrder}
              className="bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600 rounded-lg px-4 py-2 h-auto font-medium text-sm"
            >
              {language === 'vi' ? 'Đặt món' : 'Order'}
            </Button>
          </div>
        </div>
      </Card>
    );
  };
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-16">
          <Text className="text-primary-500 font-semibold text-sm sm:text-base tracking-wide uppercase mb-2 block">
            {language === 'vi' ? 'Thực đơn' : 'Our Menu'}
          </Text>
          <Title level={2} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'vi' ? 'Khám phá hương vị Nhật Bản' : 'Discover Japanese Flavors'}
          </Title>
          <Text className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {language === 'vi' 
              ? 'Những món ăn tinh túy được chế biến từ nguyên liệu tươi ngon nhất'
              : 'Exquisite dishes crafted from the freshest ingredients'
            }
          </Text>
        </div>

        <div className="mb-12">
          <Tabs 
            activeKey={activeCategory}
            onChange={setActiveCategory}
            centered
            size="large"
            className="menu-tabs"
            items={categories.map(category => ({
              key: category.key,
              label: (
                <span className="px-6 py-3 text-lg font-medium">
                  {category.label}
                </span>
              )
            }))}
          />
        </div>        <div className="mb-20">
          <Row gutter={[32, 32]}>
            {filteredItems.map((item, index) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={index}>
                <SlideUpAnimation 
                  delay={index * 100} 
                  className="menu-card-container h-full"
                >
                  <MenuCard item={item} />
                </SlideUpAnimation>
              </Col>
            ))}
          </Row>
        </div>

        <div className="text-center bg-primary-500 rounded-3xl p-12 text-white">
          <Title level={3} className="text-3xl font-bold text-white mb-4">
            {language === 'vi' ? 'Muốn xem thêm?' : 'Want to see more?'}
          </Title>
          <Text className="text-primary-100 text-lg mb-8 block max-w-2xl mx-auto">
            {language === 'vi' 
              ? 'Khám phá toàn bộ thực đơn với hơn 50 món ăn đặc biệt'
              : 'Explore our full menu with over 50 signature dishes'
            }
          </Text>
          <Button 
            type="default"
            size="large"
            className="bg-white text-primary-500 border-white hover:bg-gray-100 hover:text-primary-600 px-8 py-3 h-auto text-lg font-semibold rounded-xl"
          >
            {language === 'vi' ? 'Xem thực đơn đầy đủ' : 'View Full Menu'}          
            </Button>        
          </div>
      </div>
    </section>
  );
};

export default MenuSection;
