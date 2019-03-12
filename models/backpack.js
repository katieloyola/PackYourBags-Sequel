module.exports = function(sequelize, DataTypes) {
    var Backpack = sequelize.define("Backpack", {
      backpack_item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      packed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    });
  
    return Backpack;
};
