module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        binh_luan_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        bai_dang_id: { type: DataTypes.INTEGER, allowNull: false },
        nguoi_dung_id: { type: DataTypes.INTEGER, allowNull: false },
        noi_dung: { type: DataTypes.TEXT, allowNull: false },
        ngay_binh_luan: { type: DataTypes.DATE }
    });
    return Comment;
};
