'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'mago1',
        ativo: true,
        email: 'mago1@mago.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'mago2',
        ativo: true,
        email: 'mago2@mago.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'mago3',
        ativo: true,
        email: 'mago3@mago.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'mago4',
        ativo: true,
        email: 'mago4@mago.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
