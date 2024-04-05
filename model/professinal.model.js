import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import User from './user.model.js';

const Professional = sequelize.define('Professional', {
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
      },
      userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                  model: 'users',
                  key: 'id'
            }
      },
      fullName: DataTypes.STRING,
      gmail: DataTypes.STRING,
      professional: DataTypes.STRING,
      organization: DataTypes.STRING,
      designation: DataTypes.STRING,
      contact: DataTypes.STRING,
      city : DataTypes.STRING,
      address: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      additionalInformation: DataTypes.STRING
});

Professional.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync().then(() => {
      console.log("Professional Table Created.");
}).catch(err => {
      console.log("Error creating Professional table");
      console.error(err);
});

export default Professional;
