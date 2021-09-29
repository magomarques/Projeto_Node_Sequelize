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
    await queryInterface.bulkInsert('Matriculas', [
      {
        status: "confirmado",
        estudante_id: 2,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 5,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
