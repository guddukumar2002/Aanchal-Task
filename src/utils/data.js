export const IMG = (name) => `/images/${name}`;

export const categories = [
  { id: 'banarasi',   name: 'Banarasi',      image: IMG('image 14.png') },
  { id: 'kanjivaram', name: 'Kanjivaram',    image: IMG('image 16.png') },
  { id: 'bengoli',    name: 'Bengoli',       image: IMG('image 17.png') },
  { id: 'sambalpuri', name: 'Sambalpuri',    image: IMG('image 18.png') },
  { id: 'bridal',     name: 'Bridal Sarees', image: IMG('image 19.png') },
  { id: 'daily',      name: 'Daily Wear',    image: IMG('image 19 (1).png') },
];

export const weddingCollections = [
  { id: 'cocktail',     name: 'Cocktail Conversations', image: IMG('image 20.png') },
  { id: 'engagement',   name: 'Engagement Ensemble',    image: IMG('image 21.png') },
  { id: 'haldi',        name: 'Handpicked for Haldi',   image: IMG('image 22.png') },
  { id: 'mehendi',      name: 'Mehendi Muse',           image: IMG('image 23.png') },
  { id: 'wedding-vows', name: 'Wedding Vows',           image: IMG('image 24.png') },
  { id: 'reception',    name: 'Reception Ready',        image: IMG('image 25.png') },
];

export const newArrivalsProducts = [
  { id: 1,  name: 'Aftaab Jamawar Banarasi Silk Saree',        price: 3250,  originalPrice: 4550,  image: IMG('image 26.png'), category: 'banarasi',   fabric: 'banarasi-silk' },
  { id: 2,  name: 'Kongposh Jamawar Banarasi Silk Saree',       price: 9850,  originalPrice: 10550, image: IMG('image 27.png'), category: 'banarasi',   fabric: 'pure-zari-kanchipuram' },
  { id: 3,  name: 'Satara Pure Banarasi Silk Saree',            price: 4950,  originalPrice: 6790,  image: IMG('image 28.png'), category: 'banarasi',   fabric: 'paithani' },
  { id: 4,  name: 'Naila Pure Banarasi Silk Saree',             price: 8750,  originalPrice: 11999, image: IMG('image 29.png'), category: 'bridal',     fabric: 'banarasi-katan-silk' },
  { id: 5,  name: 'Spring Blossom Mashru Banarasi Silk Saree',  price: 3250,  originalPrice: 4550,  image: IMG('image 30.png'), category: 'banarasi',   fabric: 'silk-cotton' },
  { id: 6,  name: 'Sky Kiss Mashru Banarasi Silk Saree',        price: 9850,  originalPrice: 10550, image: IMG('image 31.png'), category: 'kanjivaram', fabric: 'chanderi' },
  { id: 7,  name: 'Towards Temple Mashru Banarasi Silk Saree',  price: 4950,  originalPrice: 6790,  image: IMG('image 32.png'), category: 'daily',      fabric: 'georgette' },
  { id: 8,  name: 'Wedding Wild Mashru Banarasi Silk Saree',    price: 8750,  originalPrice: 11999, image: IMG('image 33.png'), category: 'bridal',     fabric: 'brocade-kanchipuram' },
];

export const trendingProducts = [
  { id: 9,  name: 'Pramodutha Tissue Silk Saree',              price: 3250,  originalPrice: 4550,  image: IMG('image 34.png'), category: 'daily',    fabric: 'soft-silks' },
  { id: 10, name: 'Vibhava Tissue Silk Saree',                 price: 9850,  originalPrice: 10550, image: IMG('image 35.png'), category: 'daily',    fabric: 'tussar' },
  { id: 11, name: 'Journey of Soul Silver Zari Tissue Saree',  price: 4950,  originalPrice: 6790,  image: IMG('image 36.png'), category: 'daily',    fabric: 'organza' },
  { id: 12, name: 'Joy of Life Silk Tissue Saree',             price: 8750,  originalPrice: 11999, image: IMG('image 37.png'), category: 'daily',    fabric: 'kanchipuram-tissue-silk' },
  { id: 13, name: 'Aftaab Jamawar Banarasi Silk Saree',        price: 3250,  originalPrice: 4550,  image: IMG('image 26.png'), category: 'banarasi', fabric: 'banarasi-silk' },
  { id: 14, name: 'Kongposh Jamawar Banarasi Silk Saree',      price: 9850,  originalPrice: 10550, image: IMG('image 27.png'), category: 'banarasi', fabric: 'pure-zari-kanchipuram' },
  { id: 15, name: 'Satara Pure Banarasi Silk Saree',           price: 4950,  originalPrice: 6790,  image: IMG('image 28.png'), category: 'banarasi', fabric: 'paithani' },
  { id: 16, name: 'Naila Pure Banarasi Silk Saree',            price: 8750,  originalPrice: 11999, image: IMG('image 29.png'), category: 'bridal',   fabric: 'banarasi-katan-silk' },
];

export const fabrics = [
  { id: 'pure-zari-kanchipuram',   name: 'Pure Zari Kanchipuram',   image: IMG('image 48.png') },
  { id: 'soft-silks',              name: 'Soft Silks',              image: IMG('image 50.png') },
  { id: 'crepe',                   name: 'Crepe',                   image: IMG('image 51.png') },
  { id: 'organza',                 name: 'Organza',                 image: IMG('image 52.png') },
  { id: 'banarasi-silk',           name: 'Banarasi Silk',           image: IMG('image 53.jpg') },
  { id: 'tussar',                  name: 'Tussar',                  image: IMG('image 54.png') },
  { id: 'ikats',                   name: 'Ikats',                   image: IMG('image 56.png') },
  { id: 'silk-cotton',             name: 'Silk Cotton',             image: IMG('image 57.png') },
  { id: 'cotton',                  name: 'Cotton',                  image: IMG('image 58.png') },
  { id: 'paithani',                name: 'Paithani',                image: IMG('image 52.png') },
  { id: 'chanderi',                name: 'Chanderi',                image: IMG('image 54.png') },
  { id: 'banarasi-katan-silk',     name: 'Banarasi Katan Silk',     image: IMG('image 58.png') },
  { id: 'kanchi-half-fine',        name: 'Kanchi Half Fine',        image: IMG('image 48.png') },
  { id: 'georgette',               name: 'Georgette',               image: IMG('image 50.png') },
  { id: 'chiffon',                 name: 'Chiffon',                 image: IMG('image 51.png') },
  { id: 'kanchipuram-tissue-silk', name: 'Kanchipuram Tissue Silk', image: IMG('image 56.png') },
  { id: 'bangalore-silk',          name: 'Bangalore Silk',          image: IMG('image 57.png') },
  { id: 'brocade-kanchipuram',     name: 'Brocade Kanchipuram',     image: IMG('image 53.jpg') },
];

export const luxuryCollections = [
  { id: 'kanchi-border', name: 'Kanchi Border',       image: IMG('Rectangle 11.png') },
  { id: 'georgette',     name: 'Georgette Sarees',    image: IMG('Rectangle 11 (1).png') },
  { id: 'handloom',      name: 'Handloom Sarees',     image: IMG('Rectangle 11 (2).png') },
  { id: 'chanderi',      name: 'Chanderi Collection', image: IMG('Rectangle 11 (3).png') },
  { id: 'designer',      name: 'Designer Sarees',     image: IMG('Rectangle 11 (4).png') },
  { id: 'linen',         name: 'Linen Sarees',        image: IMG('Rectangle 11 (5).png') },
];

export const faqs = [
  { q: 'Are the saree colors exactly the same as shown?',  a: 'We try our best to display accurate colors, though slight variations may occur due to lighting and screen settings.' },
  { q: 'Are the saree colors exactly the same as shown?',  a: 'We try our best to display accurate colors, though slight variations may occur due to lighting and screen settings.' },
  { q: 'Do you offer Cash on Delivery?',                   a: 'Yes, we offer Cash on Delivery for orders within India. COD charges may apply based on your location.' },
  { q: 'How can I contact customer support?',              a: 'You can reach us at support@aanchal.com or call +91 98765 43210 during business hours (Mon-Sat, 10am-6pm).' },
];
