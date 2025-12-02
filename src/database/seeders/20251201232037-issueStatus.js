'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("issue_status", [
      {
        name: "Open",
        slug: "open"
      },
      {
        name: "In Progress",
        slug: "in_progress"
      },
      {
        name: "Closed",
        slug: "closed"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "issue_status",
      {
        slug: ["open", "in_progress", "closed"]
      },
      {}
    );
  }
};
