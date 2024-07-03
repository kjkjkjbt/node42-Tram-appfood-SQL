// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });
//     return User;
// };

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nguoi_dung_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: { type: DataTypes.STRING, allowNull: false },
        mat_khau: { type: DataTypes.STRING, allowNull: false },
        ho_ten: { type: DataTypes.STRING, allowNull: false },
        gioi_tinh: { type: DataTypes.STRING },
        ngay_sinh: { type: DataTypes.DATE }
    });
    return User;
};
