'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});

  Review.associate = function(models) {
    Review.belongsTo(models.Product, { foreignKey: 'productId' });
    // Optionally:
    // Review.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Review;
};
