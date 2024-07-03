module.exports = (sequelize, DataTypes) => {
    const UserImage = sequelize.define('UserImage', {
        nguoi_dung_id: { type: DataTypes.INTEGER, allowNull: false },
        anh_id: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        primaryKey: ['nguoi_dung_id', 'anh_id']
    });
    return UserImage;
};
