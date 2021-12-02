const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }

  Subscriptions.init({
    userId: {
      type: DataTypes.INTEGER,
    },
    subscriptionId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'subscriptions',
  });

  return Subscriptions;
};
