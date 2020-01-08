module.exports = (sequelize, DataTypes) => {
  const ProductList = sequelize.define('Board', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: { type: DataTypes.STRING, allowNull: false }
  })

  ProductList.associate = function(models) {
    models.ProductList.hasMany(models.Product)
  }

  return ProductList
}
