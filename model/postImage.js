module.exports = (sequelize, DataTypes) => {
    const PostImage = sequelize.define('PostImage', {
        hinh_anh_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        bai_dang_id: { type: DataTypes.INTEGER, allowNull: false },
        url: { type: DataTypes.STRING, allowNull: false }
    });
    return PostImage;
};
