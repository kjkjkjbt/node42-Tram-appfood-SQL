module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        anh_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        url: { type: DataTypes.STRING, allowNull: false },
        nguoi_dung_id: { type: DataTypes.INTEGER, allowNull: true }
    });
    return Image;
};
