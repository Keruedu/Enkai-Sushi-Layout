// Mock data cho Enkai Sushi Demo

export const menuItems = [
  // Sushi Category
  {
    id: 1,
    category: "sushi",
    vi: {
      name: "Sushi Cá Hồi",
      description: "Cá hồi tươi với cơm sushi được nêm nếm hoàn hảo"
    },
    en: {
      name: "Salmon Sushi",
      description: "Fresh salmon with perfectly seasoned sushi rice"
    },
    price: 45000,
    tags: ["fresh", "popular"],
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop"
  },  {
    id: 2,
    category: "sushi",
    vi: {
      name: "Sushi Cá Ngừ",
      description: "Cá ngừ vây xanh cao cấp trên cơm sushi"
    },
    en: {
      name: "Tuna Sushi",
      description: "Premium bluefin tuna on sushi rice"
    },
    price: 55000,
    tags: ["premium", "popular"],
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop"
  },  {
    id: 3,
    category: "sushi",
    vi: {
      name: "Sushi Lươn",
      description: "Lươn nướng với sốt teriyaki ngọt"
    },
    en: {
      name: "Eel Sushi",
      description: "Grilled eel with sweet teriyaki sauce"
    },
    price: 50000,
    tags: ["grilled", "sweet"],
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop"
  },  {
    id: 4,
    category: "sushi",
    vi: {
      name: "Sushi Tôm",
      description: "Tôm chín được chế biến theo cách truyền thống"
    },
    en: {
      name: "Shrimp Sushi",
      description: "Cooked shrimp with traditional preparation"
    },
    price: 40000,
    tags: ["cooked", "traditional"],
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop"
  },
  // Sashimi Category
  {
    id: 5,
    category: "sashimi",
    vi: {
      name: "Sashimi Cá Hồi",
      description: "Cá hồi sống thái lát, ăn không kèm cơm"
    },
    en: {
      name: "Salmon Sashimi",
      description: "Sliced raw salmon, served without rice"
    },
    price: 65000,
    tags: ["raw", "premium"],
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=300&h=200&fit=crop"
  },  {
    id: 6,
    category: "sashimi",
    vi: {
      name: "Sashimi Cá Ngừ",
      description: "Bụng cá ngừ cao cấp, tan trong miệng"
    },
    en: {
      name: "Tuna Sashimi",
      description: "Premium tuna belly, melt-in-your-mouth"
    },
    price: 75000,
    tags: ["premium", "fatty"],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop"
  },  {
    id: 7,
    category: "sashimi",
    vi: {
      name: "Sashimi Cá Buri",
      description: "Cá buri tươi với wasabi và nước tương"
    },
    en: {
      name: "Yellowtail Sashimi",
      description: "Fresh yellowtail with wasabi and soy sauce"
    },
    price: 70000,
    tags: ["fresh", "traditional"],
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop"
  },

  // Rolls Category
  {
    id: 8,
    category: "rolls",
    vi: {
      name: "California Roll",
      description: "Cua, bơ, dưa chuột với hạt mè"
    },
    en: {
      name: "California Roll",
      description: "Crab, avocado, cucumber with sesame seeds"
    },
    price: 85000,
    tags: ["popular", "classic"],
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=300&h=200&fit=crop"
  },
  {
    id: 9,
    category: "rolls",
    vi: {
      name: "Dragon Roll",
      description: "Lươn và dưa chuột phủ bơ trên mặt"
    },
    en: {
      name: "Dragon Roll",
      description: "Eel and cucumber topped with avocado"
    },
    price: 120000,
    tags: ["premium", "signature"],
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop"
  },
  {
    id: 10,
    category: "rolls",
    vi: {
      name: "Rainbow Roll",
      description: "Nhiều loại cá trên California roll"
    },
    en: {
      name: "Rainbow Roll",
      description: "Various fish over California roll"
    },
    price: 150000,
    tags: ["premium", "colorful"],
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop"
  },
  {
    id: 11,
    category: "rolls",
    vi: {
      name: "Philadelphia Roll",
      description: "Cá hồi, phô mai kem và dưa chuột"
    },
    en: {
      name: "Philadelphia Roll",
      description: "Salmon, cream cheese, and cucumber"
    },
    price: 95000,
    tags: ["creamy", "popular"],
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop"
  }
];

export const aboutContent = {
  vi: {
    title: "Về Chúng Tôi",
    subtitle: "Hành trình ẩm thực Nhật Bản chính thống",
    description: "Enkai Sushi mang đến trải nghiệm ẩm thực Nhật Bản đích thực với những món sushi, sashimi và các đặc sản được chế biến từ nguyên liệu tươi ngon nhất. Với không gian ấm cúng và đội ngũ đầu bếp giàu kinh nghiệm, chúng tôi cam kết mang đến cho quý khách những khoảnh khắc ẩm thực đáng nhớ.",
    specialties: [
      "Sushi tươi ngon được làm thủ công",
      "Sashimi cao cấp từ cá nhập khẩu",
      "Các loại roll sáng tạo độc đáo",
      "Không gian phong cách Nhật Bản"
    ]
  },
  en: {
    title: "About Us",
    subtitle: "Authentic Japanese Culinary Journey",
    description: "Enkai Sushi brings you an authentic Japanese dining experience with sushi, sashimi, and specialties made from the freshest ingredients. With our cozy atmosphere and experienced chef team, we are committed to providing memorable culinary moments for our guests.",
    specialties: [
      "Fresh handmade sushi",
      "Premium sashimi from imported fish",
      "Creative signature rolls",
      "Authentic Japanese ambiance"
    ]
  }
};

export const contactInfo = {
  vi: {
    address: "113 Đ. Cao Thắng, Quận 3, Hồ Chí Minh",
    phone: "+84 869 309 707",
    hours: {
      weekdays: "Thứ 2 - Thứ 5: 8:00 - 22:00",
      weekend: "Thứ 6 - CN: 8:00 - 23:00"
    },
    mapTitle: "Vị trí cửa hàng"
  },
  en: {
    address: "113 Cao Thang St., District 3, Ho Chi Minh City",
    phone: "+84 869 309 707",
    hours: {
      weekdays: "Mon - Thu: 8:00 AM - 10:00 PM",
      weekend: "Fri - Sun: 8:00 AM - 11:00 PM"
    },
    mapTitle: "Store Location"
  }
};

export const heroContent = {
  vi: {
    title: "Enkai Sushi",
    subtitle: "Hương vị Nhật Bản chính thống",
    description: "Trải nghiệm ẩm thực Nhật Bản đích thực với những món sushi tươi ngon và không gian ấm cúng",
    ctaText: "Xem Thực Đơn"
  },
  en: {
    title: "Enkai Sushi",
    subtitle: "Authentic Japanese Flavors",
    description: "Experience authentic Japanese cuisine with fresh sushi and cozy atmosphere",
    ctaText: "View Menu"
  }
};
