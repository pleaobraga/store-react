module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: { type: DataTypes.STRING, allowNull: false },
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Product.associate = function(models) {
    models.Product.belongsTo(models.ProductList, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Product
}
