module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('subscriptions', [{
      userId: 1,
      subscriptionId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('subscriptions', null, {});
  },
};
