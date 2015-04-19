"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ProjectId: {
        type: DataTypes.INTEGER
      },
      SprintId: {
        type: DataTypes.INTEGER
      },
      state: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      ProductBacklogId: {
        type: DataTypes.INTEGER
      },
      desc: {
        type: DataTypes.TEXT
      },
      estimation: {
        type: DataTypes.INTEGER
      },
      remaining: {
        type: DataTypes.INTEGER
      },
      UserId: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Tasks").done(done);
  }
};