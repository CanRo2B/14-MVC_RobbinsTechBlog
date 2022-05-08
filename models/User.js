const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/config");

class User extends Model {
    // set up a method to run on instance data (per user) to check passwords
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
};

User.init(
    { 
        // Finish the user model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
        },
    },
    {
    hooks: {
        // set up beforeCreate lifecycle "hook"
        // beforeCreate: async () => {},
        // beforeUpdate: async () => {}
        beforeCreate: async (newUserInfo) => {
            newUserInfo.password = await bcrypt.hash(newUserInfo.password, 10);
            return newUserInfo;
          },
          beforeUpdate: async (updatedUserInfo) => {
            updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password, 10);
            return updatedUserInfo;
          },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "User"
    }
);

module.exports = User;