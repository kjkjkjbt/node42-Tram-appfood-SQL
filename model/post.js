module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        bai_dang_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        noi_dung: { type: DataTypes.TEXT, allowNull: false },
        nguoi_dung_id: { type: DataTypes.INTEGER, allowNull: false }
    });
    return Post;
};
