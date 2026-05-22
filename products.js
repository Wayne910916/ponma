// 商品數據庫
const products = {
  dumplings: [
    {
      id: 'd001',
      name: '經典高麗菜鮮肉',
      category: 'classic',
      price: 169,
      pieces: 20,
      weight: 500,
      description: '採用台灣國產豬肉與新鮮高麗菜，咬下去多汁飽滿，是居家必備的經典款。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23E8C4A6%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%238B6F47%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2224%22 text-anchor=%22middle%22 fill=%22%23333%22%3E經典高麗菜鮮肉%3C/text%3E%3C/svg%3E',
      ingredients: '豬肉、高麗菜、鹽、胡椒粉',
      allergens: '無',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '王媽媽', rating: 5, text: '皮Q內餡紮實，孩子超愛！' },
        { name: '小美', rating: 5, text: '冰箱常備品，必買無誤。' }
      ],
      tags: ['暢銷', '經典']
    },
    {
      id: 'd002',
      name: '招牌韭菜豬肉',
      category: 'classic',
      price: 179,
      pieces: 20,
      weight: 500,
      description: '嚴選新鮮韭菜，香氣逼人，豬肉選用梅花肉部位，油脂分佈均勻，咬下瞬間香到天邊。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23D4E8A6%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%236B8C3A%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2224%22 text-anchor=%22middle%22 fill=%22%23333%22%3E招牌韭菜豬肉%3C/text%3E%3C/svg%3E',
      ingredients: '豬肉、韭菜、鹽、胡椒粉',
      allergens: '無',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '大衛', rating: 5, text: '香氣十足，整個廚房飄香！' }
      ],
      tags: ['香氣']
    },
    {
      id: 'd003',
      name: '鮮蝦玉米',
      category: 'seafood',
      price: 249,
      pieces: 16,
      weight: 400,
      description: '使用活凍技術鎖住鮮蝦彈性，搭配香甜玉米，每一口都能吃到飽滿蝦肉的鮮甜滋味。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23D4E8D4%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%235A8C6F%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E鮮蝦玉米%3C/text%3E%3C/svg%3E',
      ingredients: '蝦仁、玉米、豬肉、鹽',
      allergens: '蝦、無堅果',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '露露', rating: 5, text: '蝦肉新鮮彈牙，超推！' }
      ],
      tags: ['海鮮', '奢華']
    },
    {
      id: 'd004',
      name: '干貝飛魚卵',
      category: 'seafood',
      price: 299,
      pieces: 12,
      weight: 320,
      description: '使用日本干貝與飛魚卵，頂級食材搭配，爆漿飛魚卵在口中綻放鮮美風味。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23FFD4A3%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23D4860F%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E干貝飛魚卵%3C/text%3E%3C/svg%3E',
      ingredients: '干貝、飛魚卵、豬肉、鹽',
      allergens: '蝦、魚、無堅果',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '貴婦人', rating: 5, text: '頂級食材，完全物超所值！' }
      ],
      tags: ['頂級', '海鮮']
    },
    {
      id: 'd005',
      name: '素食三菇',
      category: 'vegetarian',
      price: 139,
      pieces: 18,
      weight: 450,
      description: '嚴選香菇、金針菇、杏鮑菇三種菇類，搭配豆腐與南瓜，營養滿分，健身愛好者必買。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23C8D4A6%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23789C5E%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2224%22 text-anchor=%22middle%22 fill=%22%23333%22%3E素食三菇%3C/text%3E%3C/svg%3E',
      ingredients: '香菇、金針菇、杏鮑菇、豆腐、南瓜',
      allergens: '無',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '健身女孩', rating: 5, text: '高蛋白低脂肪，健身首選！' }
      ],
      tags: ['素食', '健身']
    },
    {
      id: 'd006',
      name: '素食蔬食起司',
      category: 'vegetarian',
      price: 149,
      pieces: 18,
      weight: 450,
      description: '起司控必買！使用紐西蘭起司搭配新鮮時蔬，每一口都有牽絲的起司香，素食也能享受奢華感。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23FFE8A6%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23D4A820%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E素食起司%3C/text%3E%3C/svg%3E',
      ingredients: '起司、時蔬、豆腐、鹽',
      allergens: '乳製品',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '起司控', rating: 5, text: '起司香爆了，牽絲牽牽牽！' }
      ],
      tags: ['素食', '起司']
    },
    {
      id: 'd007',
      name: '剝皮辣椒牛肉',
      category: 'limited',
      price: 219,
      pieces: 18,
      weight: 450,
      description: '新品限定！採用台灣剝皮辣椒與紐西蘭牛肉，辣中帶甜，是麻辣愛好者的天堂。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23E8A6A6%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%238B4545%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E剝皮辣椒牛肉%3C/text%3E%3C/svg%3E',
      ingredients: '牛肉、剝皮辣椒、鹽、香油',
      allergens: '無',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '辣椒妹', rating: 5, text: '辣度恰到好處，上癮！' }
      ],
      tags: ['新品', '限定', '辣椒']
    },
    {
      id: 'd008',
      name: '麻辣天麻豬肉',
      category: 'limited',
      price: 199,
      pieces: 18,
      weight: 450,
      description: '限定新口味！將麻辣與天麻的香氣融合，帶來獨特的冷凍美食體驗，麻辣愛好者的新寵。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23D4A6E8%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%235A3A8C%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E麻辣天麻豬肉%3C/text%3E%3C/svg%3E',
      ingredients: '豬肉、天麻、花椒、辣椒、鹽',
      allergens: '無',
      cookingGuide: '水煮5-7分鐘 | 煎餃3-4分鐘 | 蒸餃8-10分鐘',
      reviews: [
        { name: '天麻粉', rating: 5, text: '獨特香氣，買起來！' }
      ],
      tags: ['新品', '麻辣']
    }
  ],
  desserts: [
    {
      id: 'des001',
      name: '宇治抹茶年輪蛋糕',
      category: 'cake',
      price: 189,
      pieces: 2,
      weight: 320,
      description: '採用日本京都宇治抹茶粉，層層疊疊的年輪蛋糕，冷凍食用更能品嚐抹茶的香氣。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%236F9F5E%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23345E3A%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23FFF%22%3E抹茶年輪蛋糕%3C/text%3E%3C/svg%3E',
      ingredients: '抹茶粉、雞蛋、小麥粉、牛奶、糖',
      allergens: '蛋、乳製品、小麥',
      cookingGuide: '冷凍食用15-20分鐘 | 冷藏食用5分鐘',
      reviews: [
        { name: '抹茶愛好者', rating: 5, text: '抹茶香氣十足！' }
      ],
      tags: ['日本', '抹茶', '蛋糕']
    },
    {
      id: 'des002',
      name: '起司布朗尼',
      category: 'brownie',
      price: 149,
      pieces: 6,
      weight: 240,
      description: '濃郁起司與巧克力的完美融合，布朗尼的酥脆搭配起司的香氣，一口停不下來。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%235C4A3D%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%232F2116%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23FFF%22%3E起司布朗尼%3C/text%3E%3C/svg%3E',
      ingredients: '可可粉、起司、雞蛋、奶油、糖',
      allergens: '蛋、乳製品',
      cookingGuide: '冷凍食用直接享用 | 冷藏食用10分鐘',
      reviews: [
        { name: '起司控', rating: 5, text: '融合度完美！' }
      ],
      tags: ['起司', '巧克力', '布朗尼']
    },
    {
      id: 'des003',
      name: '法式檸檬塔',
      category: 'tart',
      price: 179,
      pieces: 8,
      weight: 280,
      description: '酸甜多層次的法式檸檬塔，冷凍食用能凍出不同口感，展現檸檬的香氣與清爽。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23FFE8A6%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23D4A820%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E檸檬塔%3C/text%3E%3C/svg%3E',
      ingredients: '檸檬、奶油、雞蛋、麵粉、糖',
      allergens: '蛋、乳製品、小麥',
      cookingGuide: '冷凍食用20-30分鐘 | 冷藏食用8分鐘',
      reviews: [
        { name: '酸甜控', rating: 5, text: '檸檬香氣超清新！' }
      ],
      tags: ['檸檬', '法式', '塔']
    },
    {
      id: 'des004',
      name: '草莓凍乳酪',
      category: 'cheese',
      price: 99,
      pieces: 1,
      weight: 250,
      description: '平價推薦！新鮮草莓搭配濃郁乳酪，冷凍後像冰淇淋一樣好吃，夏天消暑必備。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%23FFB6C1%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23D6367F%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23333%22%3E草莓凍乳酪%3C/text%3E%3C/svg%3E',
      ingredients: '草莓、乳酪、牛奶、糖',
      allergens: '乳製品',
      cookingGuide: '冷凍食用直接享用 | 冷藏食用15分鐘',
      reviews: [
        { name: '夏天精靈', rating: 5, text: '消暑聖品，根本冰淇淋！' }
      ],
      tags: ['平價', '草莓', '推薦']
    },
    {
      id: 'des005',
      name: '巧克力熔岩球',
      category: 'chocolate',
      price: 159,
      pieces: 4,
      weight: 200,
      description: '爆獎巧克力！冷凍狀態下咬下去會爆漿，濃郁巧克力漿在口中綻放，巧克力愛好者的天堂。',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F5F1EB%22 width=%22400%22 height=%22400%22/%3E%3Ccircle cx=%22200%22 cy=%22200%22 r=%22150%22 fill=%22%233D2817%22/%3E%3Cpath d=%22M150 150 Q200 100 250 150%22 stroke=%22%23000%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%23FFF%22%3E巧克力熔岩球%3C/text%3E%3C/svg%3E',
      ingredients: '黑巧克力、牛奶巧克力、可可粉、糖',
      allergens: '乳製品',
      cookingGuide: '冷凍食用直接享用 | 常溫靜置5分鐘後享用',
      reviews: [
        { name: '巧克力狂', rating: 5, text: '爆漿爆漿爆漿！' }
      ],
      tags: ['巧克力', '爆獎', '熔岩']
    }
  ]
};

// 獲取所有商品
function getAllProducts() {
  return [...products.dumplings, ...products.desserts];
}

// 按類別篩選
function getProductsByCategory(category) {
  const all = getAllProducts();
  if (category === 'all') return all;
  return all.filter(p => p.category === category);
}

// 獲取單一商品
function getProductById(id) {
  return getAllProducts().find(p => p.id === id);
}

// 取得所有類別
function getCategories() {
  return [
    { id: 'all', name: '全部商品' },
    { id: 'classic', name: '經典系列' },
    { id: 'seafood', name: '海鮮奢華' },
    { id: 'vegetarian', name: '蔬食專區' },
    { id: 'limited', name: '限定新品' },
    { id: 'cake', name: '蛋糕' },
    { id: 'brownie', name: '布朗尼' },
    { id: 'tart', name: '塔類' },
    { id: 'cheese', name: '乳酪' },
    { id: 'chocolate', name: '巧克力' }
  ];
}
