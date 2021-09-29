'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: '2021-09-29',
        nivel_id: 1,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2021-09-28',
        nivel_id: 2,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2021-09-27',
        nivel_id: 3,
        docente_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Turmas', null, {});
  }
};
