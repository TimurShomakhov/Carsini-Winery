'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      // 🍷 Red Wines
      {
        name: 'Cabernet Sauvignon',
        description: 'A bold red wine with notes of blackberry, cassis, and oak.',
        price: 28.0,
        image: '/images/wines/cabernet-sauvignon.jpg',
        stock: 60,
        category: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Merlot',
        description: 'Smooth and approachable with plum and chocolate undertones.',
        price: 24.0,
        image: '/images/wines/merlot.jpg',
        stock: 70,
        category: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pinot Noir',
        description: 'Light-bodied with bright cherry flavors and earthy undertones.',
        price: 30.0,
        image: '/images/wines/pinot-noir.jpg',
        stock: 50,
        category: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 🥂 White Wines
      {
        name: 'Chardonnay',
        description: 'Rich and buttery with vanilla and toasted oak.',
        price: 22.0,
        image: '/images/wines/chardonnay.jpg',
        stock: 80,
        category: 'White',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sauvignon Blanc',
        description: 'Crisp and zesty with citrus, green apple, and herbaceous notes.',
        price: 20.0,
        image: '/images/wines/sauvignon-blanc.jpg',
        stock: 90,
        category: 'White',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 🌸 Rosé Wines
      {
        name: 'Grenache Rosé',
        description: 'Dry and floral with strawberry, raspberry, and watermelon hints.',
        price: 18.0,
        image: '/images/wines/grenache-rose.jpg',
        stock: 55,
        category: 'Rosé',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Syrah Rosé',
        description: 'Richer rosé with notes of cherry, peach, and spice.',
        price: 19.0,
        image: '/images/wines/syrah-rose.jpg',
        stock: 45,
        category: 'Rosé',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 🍾 Sparkling Wines
      {
        name: 'Prosecco',
        description: 'Delicate bubbles with white peach and citrus flavors.',
        price: 22.0,
        image: '/images/wines/prosecco.jpg',
        stock: 65,
        category: 'Sparkling',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sparkling Rosé',
        description: 'Lively and elegant with notes of raspberry and cream.',
        price: 23.0,
        image: '/images/wines/sparkling-rose.jpg',
        stock: 60,
        category: 'Sparkling',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 🍬 Dessert Wines
      {
        name: 'Port',
        description: 'Sweet and fortified with deep berry and chocolate richness.',
        price: 35.0,
        image: '/images/wines/port.jpg',
        stock: 40,
        category: 'Dessert',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ice Wine',
        description: 'Made from frozen grapes, intensely sweet and fragrant.',
        price: 40.0,
        image: '/images/wines/ice-wine.jpg',
        stock: 30,
        category: 'Dessert',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
