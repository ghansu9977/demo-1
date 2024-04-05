import { DataTypes } from 'sequelize';
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

const User = sequelize.define("user", {
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
      },

      name: {
            type: DataTypes.STRING,
            allowNull: false
      },

      email: {
            type: DataTypes.STRING, allowNull: false, unique: true
      },

      password: {
            type: DataTypes.STRING, allowNull: false,
            set(value) {
                  let saltKey = bcrypt.genSaltSync(10);
                  let encryptedPassword = bcrypt.hashSync(value, saltKey);
                  this.setDataValue("password", encryptedPassword);
            }
      }
});

User.checkPassword = (originalPassword, encryptedPassword) => {
      console.log("User table Created.....");
      console.log(originalPassword, encryptedPassword);
      return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync().then(() => {
      console.log("User table Created");
}).catch(err => {
      console.log("Something Wrong Data");
      console.log(err);
});

export default User;
