 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },      
      tag_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"tags",
          key:"id"
        }
      }, 
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("games");
  },
};
