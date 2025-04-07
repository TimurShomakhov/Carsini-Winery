'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // A review belongs to a product
      Review.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE', // if the product is deleted, its reviews are too
      });

      // Optional: If user associations are added later
      // Review.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Review.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true, // Optional
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );

  return Review;
};
