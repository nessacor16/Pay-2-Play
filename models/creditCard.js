

module.exports = function(sequelize, DataTypes) {

  var CreditCard = sequelize.define("CreditCard", {
    // Giving the Author model a name of type STRING
    amount: DataTypes.NUMBER,
    email: DataTypes.STRING,
  });

  CreditCard.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    CreditCard.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return CreditCard;
};



