import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Samsung Galaxy S24+',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Flevant%2Fsmartphones%2F&psig=AOvVaw2O3MOz7ph7nHktoKuZTxxT&ust=1728819330898000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwih8oeC4IiJAxVge2wGHekSAhYQjRx6BAgAEBk',
    '512GB｜12GBSapphire Blue',
    32,499.99
  ),
  new Product(
    'p2',
    'u1',
    'Galaxy Z Flip6',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2KCB-KNncjw5ShEEYkyvDz2cO8K7b2pMZA&s',
    '256GB｜12GB',
    89,499.99
  ),
  new Product(
    'p3',
    'u2',
    'iPhone 16 series',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cxoinsightme.com%2Ffuture%2Fgadgets%2Fapple-debuts-iphone-16-series-ai-takes-centre-stage%2F&psig=AOvVaw2iGed-DxoDZP8fCEdedvRz&ust=1728820017743000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICC7NTiiIkDFQAAAAAdAAAAABAE',
    'Siri get smarter with AI \n Powerful hardware',
    1,25,499
  ),
  new Product(
    'p4',
    'u3',
    'iPhone 15 series',
    'https://media.wired.com/photos/6500ad55dc8351838b8b71e2/master/w_320%2Cc_limit/Apple-iPhone-15-Pro-Colors-Gear.jpg',
    "Your new iPhone awaits. Make it yours.",
    87,099
  ),
  new Product(
    'p5',
    'u3',
    'iPhone 14 series',
    'https://images-cdn.ubuy.co.in/639ccfc3770a550ddf5d07e3-restored-apple-iphone-14-pro-max-256gb.jpg',
    'Your new iPhone awaits. Make it yours.',
    54,699
  ),
  new Product(
    'p6',
    'u1',
    'iPhone 13 series',
    'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-Pro-color-lineup-220308_big_carousel.jpg.slideshow-xlarge_2x.jpg',
    "Your new iPhone awaits. Make it yours.",
    34,199
  )
];

export default PRODUCTS;